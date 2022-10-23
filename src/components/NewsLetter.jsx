import React from "react";
import { IcEmail, IcFacebook, IcInstagram, IcTiktok } from "../data/icons";
import useEmail from "../hooks/useEmail";
import { useAlert } from "../contexts/AlertContext";
import { Link } from "react-router-dom";
import { facebookURL, instagramURL, tiktokURL } from "../data";

const NewsLetter = () => {
    const [email, setEmail] = React.useState("");

    const { addEmail } = useEmail();
    const { setAlert } = useAlert();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await addEmail(email);
            if (res)
                setAlert([
                    "success",
                    "Thank You For Subscribing To Our News Letter.",
                ]);
        } catch (err) {
            if (err === "email_exist")
                setAlert([
                    "warn",
                    `This Email < ${email} > already Subscribed!`,
                ]);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-6 md:gap-y-12">
                <div className="text-4xl">Sign up for our update</div>
                <div className="font-light text-xl">
                    To stay up-to-date on our promotions, discounts, sales,
                    special offers and more.
                </div>
                <div className="relative w-full">
                    <input
                        type="email"
                        required
                        className="ring-dark/25 ring-2 py-3 px-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-xl"
                        placeholder="Type you Email here..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-primary absolute top-[50%] translate-y-[-50%] right-0 h-full w-16 grid place-items-center rounded-xl ring-2 ring-primary hover:bg-primary/75 disabled:bg-primary/50 transition-colors duration-300"
                    >
                        <IcEmail className="text-white text-4xl hover:scale-95 transition-transform duration-300" />
                    </button>
                </div>
                <div className="flex gap-x-4 w-full">
                    <a href={facebookURL} target="_blank">
                        <IcFacebook className="nav-icon text-2xl" />
                    </a>
                    <a href={instagramURL} target="_blank">
                        <IcInstagram className="nav-icon text-2xl" />
                    </a>
                    <a href={tiktokURL} target="_blank">
                        <IcTiktok className="nav-icon text-2xl" />
                    </a>
                </div>
            </div>
        </form>
    );
};

export default NewsLetter;
