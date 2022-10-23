import React from "react";
import ContactInfo from "./ContactInfo";
import NewsLetter from "./NewsLetter";
import Map from "./Map";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const l = useLocation();
    return (
        <div
            className={
                l.pathname.startsWith("/admin") ||
                l.pathname.startsWith("/contact")
                    ? "hidden"
                    : "flex justify-center"
            }
        >
            <footer className="grid md:grid-cols-2 gap-x-16 gap-y-10 justify-center w-full max-w-[1400px] px-2 md:px-4">
                <NewsLetter />
                <ContactInfo />
                <div className="col-span-full mt-8 h-[380px]">
                    <Map />
                </div>
                <div className="col-span-full text-center text-sm">
                    Mazouz Ayoub | Burgerlo ©. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
