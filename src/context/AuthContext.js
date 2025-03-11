import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
       // Email/Password Signup
    const registerWithEmail = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    // Google Signup
    const registerWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user,registerWithEmail, registerWithGoogle, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
