import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../pages/Register";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";

jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

test("User can register with email and password", async () => {
  createUserWithEmailAndPassword.mockResolvedValue({ user: { email: "kim@test2.com" } });

  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "kim@test2.com" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "12345" } });

  fireEvent.click(screen.getByText("Register"));

  await waitFor(() => {
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, "kim@test2.com", "123456");
  });
});
