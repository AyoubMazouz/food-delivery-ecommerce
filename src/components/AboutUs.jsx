import React from "react";
import { IcStar } from "../data/icons";

const AboutUs = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] grid justify-center md:grid-cols-12 gap-x-12 px-2 md:px-4">
                <div className="md:col-span-6">
                    <img src="/assets/about-us.webp" className="w-full" />
                </div>
                <div className="flex flex-col justify-center md:col-span-6">
                    <div className="text-4xl uppercase">best Prise always</div>
                    <div className="flex gap-x-3 text-primary my-6">
                        <IcStar />
                        <IcStar />
                        <IcStar />
                    </div>
                    <div className="font-light pr-4 indent-4">
                        The perfect place to enjoy the life & delicious food
                        with your friends! Our family has been in the restaurant
                        business for a very long time. Nowadays we can proudly
                        boast our reputation for a well known restaurant in our
                        area. We are famous for the fabulous authentic cuisine,
                        professional chef and dedicated staff...
                    </div>
                    <div className="flex justify-around items-center mt-6 pr-4">
                        <div className="flex flex-col items-center space-y-3">
                            <img src="/assets/food.svg" className="w-[42px]" />
                            <div className="text-xl uppercase">Good food</div>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <img
                                src="/assets/delivery.svg"
                                className="w-[42px]"
                            />
                            <div className="text-xl uppercase">
                                fast delivery
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <img
                                src="/assets/wallet.svg"
                                className="w-[42px]"
                            />
                            <div className="text-xl uppercase">nice price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
