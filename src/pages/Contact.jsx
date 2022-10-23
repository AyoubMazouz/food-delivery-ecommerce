import React from "react";
import ContactForm from "../components/ContactForm";
import NewsLetter from "../components/NewsLetter";
import ContactInfo from "../components/ContactInfo";
import Map from "../components/Map";

const Contact = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-[1400px] grid grid-cols-2 gap-x-20 gap-y-16 px-4 pt-12">
                <div className="col-span-full flex justify-center relative max-h-[140px] w-full">
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white md:text-7xl text-4xl">
                        Contact
                    </div>
                    <img
                        src="/assets/header-bg.jpg"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-full lg:col-span-1">
                    <ContactForm />
                </div>
                <div className="col-span-full lg:col-span-1 h-[260px] lg:h-full rounded-lg">
                    <Map />
                </div>
                <div className="col-span-full lg:col-span-1">
                    <NewsLetter />
                </div>
                <div className="col-span-full lg:col-span-1">
                    <ContactInfo />
                </div>
                <div className="col-span-full text-center text-sm">
                    Mazouz Ayoub | Burgerlo ©. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Contact;
