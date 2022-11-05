import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

const MenuPage = () => {
    const { tab } = useParams();
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] pt-12 px-2 md:px-4">
                <div className="flex justify-center relative h-[140px] w-full mb-12">
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white md:text-7xl text-4xl">
                        Menu
                    </div>
                    <img
                        src="/assets/header-bg.jpg"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <Menu defaultTab={tab ? tab : "burger"} />
            </div>
        </div>
    );
};

export default MenuPage;
