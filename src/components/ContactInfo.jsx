import React from "react";
import { Link } from "react-router-dom";
import { address, phoneNum, workHours } from "../data";
import { IcAddress, IcClock, IcEmail, IcPhone } from "../data/icons";

const ContactInfo = () => {
    return (
        <div className="space-y-4 text-2xl font-light">
            <div className="text-4xl font-normal pb-4">Contact Us</div>
            <div className="flex gap-x-6">
                <IcAddress className="text-4xl text-primary mt-1" />
                <span>{address}</span>
            </div>
            <a
                href={`tel:${phoneNum}`}
                className="text-3xl font-normal flex gap-x-4"
            >
                <IcPhone className="text-4xl text-primary mt-1" />
                <span className="hover:text-primary transition-colors duration-300">
                    {phoneNum}
                </span>
            </a>
            <div className="flex gap-x-6">
                <IcClock className="text-4xl text-primary mt-2" />
                <span>
                    {workHours.map((item) => (
                        <div>{item}</div>
                    ))}
                </span>
            </div>
            <Link to="contact" className="flex gap-x-6 text-3xl font-normal">
                <IcEmail className="text-4xl text-primary mt-1" />
                <span className="hover:text-primary transition-colors duration-300">
                    Send us a message
                </span>
            </Link>
        </div>
    );
};

export default ContactInfo;
