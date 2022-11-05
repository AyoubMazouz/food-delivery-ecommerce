import React from "react";
import { useParams } from "react-router-dom";
import { IcStar } from "../../data/icons";
import { useCart } from "../../contexts/CartContext";
import { useAlert } from "../../contexts/AlertContext";
import useItem from "../../hooks/useItem";
import NavMenu from "./NavMenu";
import CommentSection from "./CommentSection";

const index = () => {
    const [item, setItem] = React.useState(null);
    const [option, setOption] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1);

    const { id } = useParams();
    const { getItem } = useItem();
    const { addCartItem } = useCart();
    const { setAlert } = useAlert();

    React.useEffect(() => {
        getItem(id.replace("-", " ")).then((item) => {
            setItem(item);
            if (item.sizes.length === 1) setOption(item.sizes[0].label);
        });
    }, []);

    // Updates Item Quantity.
    const quantityHandler = (e) => {
        if (e.target.value <= 1) setQuantity(1);
        else setQuantity(e.target.value);
    };

    const addItemHandler = (item) => {
        const price = item.sizes.filter((size) => size.label === option)[0]
            .price;
        const temp = {
            item,
            order: {
                itemId: item.id,
                option,
                quantity,
                price,
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

    if (item)
        return (
            <div className="flex flex-col items-center">
                <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-x-8 pt-12 px-2 md:px-4">
                    <div className="col-span-9 grid md:grid-cols-2 gap-8">
                        <div className="w-full flex items-center justify-center">
                            <img
                                src={item.imageURL}
                                className="w-full h-full aspect-square object-cover max-w-[512px] shadow-lg rounded-lg"
                            />
                        </div>
                        <div>
                            <div className="flex gap-x-1">
                                <IcStar />
                                <IcStar />
                                <IcStar />
                                <IcStar />
                                <IcStar />
                            </div>
                            <div className="text-xl capitalize mt-4 mb-2">
                                {item.id}
                            </div>
                            <div className="text-lg text-primary">
                                {item.sizes.length === 1
                                    ? `${item.sizes[0].price}`
                                    : `${item.sizes[0].price} - ${
                                          item.sizes[item.sizes.length - 1]
                                              .price
                                      }`}{" "}
                                DH
                            </div>
                            <div className="font-light my-6 line-clamp-4">
                                {item.description}
                            </div>
                            {item.sizes.length > 1 && (
                                <div className="mb-2">
                                    <label
                                        htmlFor="option"
                                        className="form-label"
                                    >
                                        Option
                                    </label>
                                    <select
                                        name="option"
                                        value={option}
                                        onChange={(e) =>
                                            setOption(e.target.value)
                                        }
                                        className="form-input uppercase"
                                    >
                                        {item.sizes.map((size) => (
                                            <option value={size.label}>
                                                {size.label} - {size.price} DH
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="flex gap-x-6">
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={quantityHandler}
                                    className="form-input w-[80px]"
                                />
                                <button
                                    className="btn rounded-full"
                                    onClick={() => addItemHandler(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 hidden lg:block">
                        <NavMenu />
                    </div>
                </div>
                <div className="w-full">
                    <CommentSection id={id.replace("-", " ")} />
                </div>
            </div>
        );
};

export default index;
