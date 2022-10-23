import React, { createContext, useContext, useState, useEffect } from "react";
// Firebase Imports.
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currUser, setCurrUser] = useState();

    const logIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        currUser,
        logIn,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
