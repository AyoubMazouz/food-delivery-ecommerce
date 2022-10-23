import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Contexts.
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
// Components.
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
// Pages.
import Page404 from "./pages/Page404";
import LogIn from "./pages/admin/LogIn";
import Dashboard from "./pages/admin";
import Items from "./pages/admin/Items";
import Orders from "./pages/admin/Orders";
import Messages from "./pages/admin/Messages";
import Emails from "./pages/admin/Emails";
import Home from "./pages/Home";
import Settings from "./pages/admin/Settings";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MenuPage from "./pages/MenuPage";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AlertProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<LogIn />} />
                        {/* Private Routes */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/admin" element={<Dashboard />} />
                            <Route path="/admin/orders" element={<Orders />} />
                            <Route path="/admin/items" element={<Items />} />
                            <Route
                                path="/admin/messages"
                                element={<Messages />}
                            />
                            <Route path="/admin/emails" element={<Emails />} />
                            <Route
                                path="/admin/settings"
                                element={<Settings />}
                            />
                        </Route>
                        {/* 404 Page */}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    <Footer />
                </AlertProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
