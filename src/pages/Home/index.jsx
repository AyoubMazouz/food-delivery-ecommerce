import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../../components/AboutUs";
import Menu from "../../components/Menu";

const Home = () => {
    React.useEffect(() => {
        document.title = "Burgerlo - Home";
    }, []);
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] space-y-20">
                {/* Hero */}
                <div className="px-2 md:px-4 relative h-[77vh]">
                    <img
                        src="/assets/hero.webp"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center flex-col px-8 md:px-24 text-light gap-y-12">
                        <div className="uppercase text-5xl md:text-7xl">
                            <span className="text-primary">Food </span>
                            <span className="">Delivery</span>
                        </div>
                        <div className="max-w-[30ch] text-xl md:text-2xl font-light">
                            We’re proud to have our burger’s history being as
                            long as 25 years!
                        </div>
                        <div>
                            <Link to="menu" className="btn text-dark">
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>
                {/* AboutUs */}
                <AboutUs />
                {/* Menu */}
                <Menu defaultTab="burger" />
            </div>
        </div>
    );
};

export default Home;
