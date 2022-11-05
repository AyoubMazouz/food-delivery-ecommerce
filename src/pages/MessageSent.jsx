import React from "react";
import { Link } from "react-router-dom";
const MessageSent = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] text-center pt-12">
                <div className="text-2xl text-primary">Thank You!</div>
                <div className="font-light">Your message has been sent.</div>
                <div className="">
                    <img
                        src="/assets/message-sent.svg"
                        className="object-fit w-full h-[388px] -mt-4"
                    />
                </div>
                <Link to="/" className="btn">
                    Go back Home
                </Link>
            </div>
        </div>
    );
};

export default MessageSent;
