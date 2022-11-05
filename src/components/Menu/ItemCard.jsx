import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useAlert } from "../../contexts/AlertContext";

const ItemCard = ({ item }) => {
    const { addCartItem, loading } = useCart();
    const { setAlert } = useAlert();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/menu/item/${item.id.replace(" ", "-")}`);
    };

    const addItemHandler = (e) => {
        e.stopPropagation();
        const temp = {
            item,
            order: {
                itemId: item.id,
                option: item.sizes[0].label,
                quantity: 1,
                price: item.sizes[0].price,
            },
        };
        addCartItem(temp);

        setAlert([
            "success",
            `Item < ${item.id.toUpperCase()} * ${
                temp.order.quantity
            } > has been added to the cart`,
        ]);
    };
    return (
        <div
            onClick={clickHandler}
            className="group relative rounded-lg shadow-lg border-secondary border-2 overflow-hidden cursor-pointer"
        >
            <div className="absolute top-0 right-0 bottom-0 left-0 group-hover:bg-white/75 z-10 transition-colors duration-300"></div>
            <div className="w-[320px] md:w-[230px] h-[260px] md:h-[240px]">
                <img
                    src={item.imageURL}
                    className="object-cover w-[320px] md:w-[230px] h-[230px]"
                />
            </div>
            <div className="px-2 absolute bottom-[7%] group-hover:bottom-[35%] transition-all duration-500 z-10">
                <div className="capitalize text-2xl h-[60px]">{item.id}</div>
                <div className="text-primary text-xl">
                    {item.sizes.length === 1
                        ? `${item.sizes[0].price}`
                        : `${item.sizes[0].price} - ${
                              item.sizes[item.sizes.length - 1].price
                          }`}{" "}
                    DH
                </div>
            </div>
            <div className="px-2 absolute bottom-[-50%] group-hover:bottom-[15%] transition-all duration-500 z-10 h-[60px]">
                <div className="text-sm max-w-[200px] line-clamp-2 mb-5 font-light">
                    {item.description}
                </div>
                {item.sizes.length > 1 ? (
                    <Link
                        to="menu/:item"
                        className="btn rounded-full text-white font-light"
                    >
                        Select an option
                    </Link>
                ) : (
                    <button
                        className="btn rounded-full text-white font-light z-10"
                        onClick={addItemHandler}
                        disabled={loading}
                    >
                        Add to cart
                    </button>
                )}
            </div>
            <div className="h-[110px]"></div>
        </div>
    );
};

export default ItemCard;
