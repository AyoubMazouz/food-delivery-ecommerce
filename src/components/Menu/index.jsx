import React from "react";
import useItem from "../../hooks/useItem";
import ItemCard from "./ItemCard";

const tabs = ["burger", "pizza", "pasta", "desert", "dessert", "drink"];

const Menu = ({ defaultTab }) => {
    const [items, setItems] = React.useState([]);
    const [tab, setTab] = React.useState(defaultTab);
    const { getItems } = useItem();

    React.useEffect(() => {
        getItems(setItems);
        if (!tabs.includes(defaultTab)) {
            defaultTab = "burger";
        }
    }, []);

    const filteredLs = items.filter((item) => {
        if (item.tags === tab) return true;
    });

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                {/* Tabs */}
                <div className="w-full max-w-[1000px] flex justify-around mb-12">
                    <div
                        className="flex flex-col items-center space-y-3 group cursor-pointer"
                        onClick={() => setTab("burger")}
                    >
                        <img
                            src="/assets/burger.svg"
                            className="w-[42px] md:w-[54px] group-hover:scale-95 transition-transform duration-300"
                        />
                        <div className="text-xl uppercase group-hover:text-primary transition-colors duration-300">
                            burger
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center space-y-3 group cursor-pointer"
                        onClick={() => setTab("pizza")}
                    >
                        <img
                            src="/assets/pizza.svg"
                            className="w-[42px] md:w-[54px] group-hover:scale-95 transition-transform duration-300"
                        />
                        <div className="text-xl uppercase group-hover:text-primary transition-colors duration-300">
                            pizza
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center space-y-3 group cursor-pointer"
                        onClick={() => setTab("pasta")}
                    >
                        <img
                            src="/assets/pasta.svg"
                            className="w-[42px] md:w-[54px] group-hover:scale-95 transition-transform duration-300"
                        />
                        <div className="text-xl uppercase group-hover:text-primary transition-colors duration-300">
                            pasta
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center space-y-3 group cursor-pointer"
                        onClick={() => setTab("drink")}
                    >
                        <img
                            src="/assets/drink.svg"
                            className="w-[42px] md:w-[54px] group-hover:scale-95 transition-transform duration-300"
                        />
                        <div className="text-xl uppercase group-hover:text-primary transition-colors duration-300">
                            drink
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center space-y-3 group cursor-pointer"
                        onClick={() => setTab("desert")}
                    >
                        <img
                            src="/assets/desert.svg"
                            className="w-[42px] md:w-[54px] group-hover:scale-95 transition-colors duration-300"
                        />
                        <div className="text-xl uppercase group-hover:text-primary transition-colors duration-300">
                            desert
                        </div>
                    </div>
                </div>
                {/* Items */}
                <div className="flex flex-wrap justify-center gap-12">
                    {filteredLs.map((item) => (
                        <ItemCard item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
