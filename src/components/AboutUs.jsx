import React from "react";
import { IcStar } from "../data/icons";

const AboutUs = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] grid md:grid-cols-2 gap-x-12 px-2 md:px-4">
                <div className="hidden md:block">
                    <img src="/assets/about-us.webp" />
                </div>
                <div className="flex flex-col justify-center">
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
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
