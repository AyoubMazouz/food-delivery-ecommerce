// React Imports.
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        const unsubscribe = setTimeout(() => {
            setAlert(null);
        }, 10000);
        return () => clearTimeout(unsubscribe);
    }, [alert]);

    const value = {
        alert,
        setAlert,
    };

    return (
        <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
    );
};
