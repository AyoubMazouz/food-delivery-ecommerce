import React from "react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
    const navigate = useNavigate();
    const onClick = (tag) => {
        navigate("/menu/" + tag);
    };
    return (
        <div className="space-y-3">
            <div
                className="relative bg-secondary rounded-md shadow-md h-[68px] overflow-hidden flex items-center px-3 cursor-pointer hover:opacity-90 hover:shadow-xl transition-all duration-300 group"
                onClick={() => onClick("burger")}
            >
                <div className="absolute top-[50%] translate-y-[-50%] right-[-10%] h-[90px] group-hover:scale-[.9] transition-all duration-1000">
                    <img
                        src="/assets/burger-nav.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="uppercase text-2xl">Burger</div>
            </div>
            <div
                className="relative bg-secondary rounded-md shadow-md h-[68px] overflow-hidden flex items-center px-3 cursor-pointer hover:opacity-90 hover:shadow-xl transition-all duration-300 group"
                onClick={() => onClick("pizza")}
            >
                <div className="absolute top-[20%] translate-y-[-50%] right-[-10%] h-[130px] group-hover:scale-[.9] transition-all duration-1000">
                    <img
                        src="/assets/pizza-nav.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="uppercase text-2xl">Pizza</div>
            </div>
            <div
                className="relative bg-secondary rounded-md shadow-md h-[68px] overflow-hidden flex items-center px-3 cursor-pointer hover:opacity-90 hover:shadow-xl transition-all duration-300 group"
                onClick={() => onClick("pasta")}
            >
                <div className="absolute top-[50%] translate-y-[-50%] right-[-4%] h-[86px] group-hover:scale-[.9] transition-all duration-1000">
                    <img
                        src="/assets/pasta-nav.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="uppercase text-2xl">Pasta</div>
            </div>
            <div
                className="relative bg-secondary rounded-md shadow-md h-[68px] overflow-hidden flex items-center px-3 cursor-pointer hover:opacity-90 hover:shadow-xl transition-all duration-300 group"
                onClick={() => onClick("desert")}
            >
                <div className="absolute top-[50%] translate-y-[-50%] right-[-5%] h-[60px] group-hover:scale-[.9] transition-all duration-1000">
                    <img
                        src="/assets/dessert-nav.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="uppercase text-2xl">dessert</div>
            </div>
            <div
                className="relative bg-secondary rounded-md shadow-md h-[68px] overflow-hidden flex items-center px-3 cursor-pointer hover:opacity-90 hover:shadow-xl transition-all duration-300 group"
                onClick={() => onClick("drink")}
            >
                <div className="absolute top-[50%] translate-y-[-50%] right-[0%] h-[85px] group-hover:scale-[.9] transition-all duration-1000">
                    <img
                        src="/assets/drink-nav.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="uppercase text-2xl">Drink</div>
            </div>
        </div>
    );
};

export default NavMenu;
