import React from "react";
import { Link, useLocation } from "react-router-dom";
// Hooks & Contexts.
// import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";
// COmponents.
import Alert from "./Alert";
import Logo from "../../components/Logo";
// Icons & Data.
import {
    IcAddress,
    IcCart,
    IcFacebook,
    IcInstagram,
    IcPhone,
    IcTiktok,
} from "../../data/icons";
import {
    address,
    facebookURL,
    instagramURL,
    phoneNum,
    tiktokURL,
} from "../../data";

const NavBar = () => {
    const [scrollY, setScrollY] = React.useState(0);
    // const { currUser } = useAuth();
    const { alert } = useAlert();

    // To figure out Curr Page URL.
    const location = useLocation();
    const l = location.pathname;

    // Keep track if user scrolls.
    window.onscroll = (e) => {
        setScrollY(window.scrollY);
    };
    return (
        <>
            <nav className="flex justify-center bg-light shadow-md z-10">
                <div className="max-w-[1400px] w-full grid place-items-center px-2 md:px-4 py-2">
                    {/* If User Scroll pass the limit the navBar Changes */}
                    {/* Logo */}
                    <div className="md:hidden">
                        <Logo />
                    </div>
                    {/* Info */}
                    <div className="w-full flex justify-between items-center py-2 md:py-4">
                        <div className="flex items-center gap-x-3 justify-center hover:text-primary transition-all duration-300 cursor-pointer text-sm sm:text-base lg:text-2xl">
                            <IcAddress className="nav-icon scale-[1.8] text-primary" />
                            {address}
                        </div>
                        <div className="hidden md:block pr-[150px]">
                            <Logo />
                        </div>
                        <a
                            href={`tel:${phoneNum}`}
                            className="flex items-center gap-x-3 justify-center hover:text-primary transition-all duration-300 cursor-pointer text-sm sm:text-base lg:text-2xl"
                        >
                            <IcPhone className="nav-icon text-primary scale-[1.5]" />
                            <span className="hover:text-primary transition-colors duration-300">
                                {phoneNum}
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            {/*  */}
            <nav className="flex justify-center bg-light shadow-md z-10 sm:sticky sm:top-0">
                <div className="max-w-[1400px] w-full flex items-center justify-center px-6 md:px-2 py-2">
                    {/* Nav */}
                    <div
                        className={`w-full flex justify-center sm:justify-between items-center z-20`}
                    >
                        <div className="hidden md:block w-[150px] h-[60px] scale-50">
                            {scrollY > 100 && <Logo />}
                        </div>
                        {/* Links */}
                        <ul className="flex justify-between items-center gap-x-6 font-light text-lg">
                            <li>
                                <Link
                                    to="/"
                                    className={`hover:text-primary transition-all duration-300 ${l ===
                                        "/" && "text-primary"}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="menu"
                                    className={`hover:text-primary transition-all duration-300 ${l ===
                                        "/menu" && "text-primary"}`}
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    className={`hover:text-primary transition-all duration-300 ${l ===
                                        "/contact" && "text-primary"}`}
                                >
                                    Contact
                                </Link>
                            </li>
                            {/* If the ADmin is LoggedIn */}
                            {/* {currUser && (
                                <li>
                                    <Link
                                        to="admin"
                                        className={`hover:text-primary transition-all duration-300 ${l.startsWith(
                                            "/admin"
                                        ) && "text-primary"}`}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            )} */}
                        </ul>
                        <div className="hidden sm:flex gap-x-3 items-center">
                            <a href={facebookURL} target="_blank">
                                <IcFacebook className="nav-icon text-2xl" />
                            </a>
                            <a href={instagramURL} target="_blank">
                                <IcInstagram className="nav-icon text-2xl" />
                            </a>
                            <a href={tiktokURL} target="_blank">
                                <IcTiktok className="nav-icon text-xl" />
                            </a>
                            <Link
                                to="cart"
                                className="flex gap-x-1 items-center cursor-pointer group"
                            >
                                <div className="h-8 border-r-2 border-r-dark/25 mx-3"></div>
                                <IcCart className="text-2xl group-hover:text-primary transition-colors duration-300" />
                                <span className="w-8 h-8 bg-primary rounded-full grid place-items-center">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* Icons */}
                    <div className="w-full flex justify-between items-center sm:hidden pt-2 px-3">
                        <div className="flex gap-x-3">
                            <a href={facebookURL} target="_blank">
                                <IcFacebook className="nav-icon text-2xl" />
                            </a>
                            <a href={instagramURL} target="_blank">
                                <IcInstagram className="nav-icon text-2xl" />
                            </a>
                            <a href={tiktokURL} target="_blank">
                                <IcTiktok className="nav-icon text-xl" />
                            </a>
                        </div>
                        <div className="p-3 bg-primary rounded-full shadow hover:bg-dark hover:scale-[.95] transition-all duration-300 cursor-pointer group">
                            <IcCart className="scale-[1.7] text-white group-hover:text-primary transition-colors duration-300" />
                        </div>
                    </div>
                </div>
            </nav>
            {alert && <Alert />}
        </>
    );
};

export default NavBar;
