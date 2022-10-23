import React from "react";
import { Outlet } from "react-router-dom";
// Contexts.
import { useAuth } from "../contexts/AuthContext";
// Pages.
import Home from "../pages/Home";

export default function PrivateRoute() {
    const { currUser } = useAuth();
    return currUser ? <Outlet /> : <Home />;
}
