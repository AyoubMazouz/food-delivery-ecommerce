import React from "react";
import { Link } from "react-router-dom";

const OrderComplete = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] text-center pt-12">
                <div className="text-2xl text-primary">Thank You!</div>
                <div className="font-light">
                    Your Order is in Process, Please wait for the confirmation
                    in a moment.
                </div>
                <div className="">
                    <img
                        src="/assets/order-completed.svg"
                        className="object-fit w-full h-[388px] -my-4"
                    />
                </div>
                <Link to="/" className="btn">
                    Go back Home
                </Link>
            </div>
        </div>
    );
};

export default OrderComplete;
