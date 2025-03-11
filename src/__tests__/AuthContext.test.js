import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React from "react";

// Mock Firebase Auth methods
jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChanged: jest.fn((auth, callback) => {
    callback(null); // Simulate no user initially
    return () => {}; // Unsubscribe function
  }),
}));

const MockComponent = () => {
  const { login, logout, user } = useAuth();
  return (
    <div>
      <button onClick={() => login("test@example.com", "password123")}>Login</button>
      <button onClick={logout}>Logout</button>
      {user ? <p>User Logged In</p> : <p>No User</p>}
    </div>
  );
};

test("Login function should call Firebase signInWithEmailAndPassword", async () => {
  signInWithEmailAndPassword.mockResolvedValue({ user: { email: "test@example.com" } });

  render(
    <AuthProvider>
      <MockComponent />
    </AuthProvider>
  );

  fireEvent.click(screen.getByText("Login"));

  await waitFor(() => {
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), "test@example.com", "password123");
  });
});

test("Logout function should call Firebase signOut", async () => {
  render(
    <AuthProvider>
      <MockComponent />
    </AuthProvider>
  );

  fireEvent.click(screen.getByText("Logout"));

  await waitFor(() => {
    expect(signOut).toHaveBeenCalled();
  });
});
