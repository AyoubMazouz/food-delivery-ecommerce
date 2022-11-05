import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { IcBin, IcSuccess } from "../data/icons";
import { useAlert } from "../contexts/AlertContext";
import NavMenu from "./ItemView/NavMenu";

const CartPage = () => {
    const { cartItems, deleteCartItem, updateCartItem } = useCart();
    const { setAlert } = useAlert();

    const [total, setTotal] = React.useState(0);

    const quantityHandler = (e, item) => {
        if (e.target.value <= 0) item.order.quantity = 1;
        else item.order.quantity = e.target.value;
        updateCartItem(item);
    };

    const deleteHandler = (item) => {
        deleteCartItem(item.order.id);

        setAlert([
            "warn",
            `Item < ${item.item.id.toUpperCase()} * ${
                item.order.quantity
            } > has been removed from the cart`,
        ]);
    };

    React.useEffect(() => {
        if (cartItems.length) {
            const total = cartItems.reduce(
                (acc, item) => item.order.price * item.order.quantity + acc,
                0
            );

            setTotal(total);
        }
    }, [cartItems]);

    if (cartItems.length === 0)
        return (
            <div className="flex justify-center">
                <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-12 px-2 md:px-4">
                    <div className="col-span-full flex justify-center relative max-h-[140px] w-full mt-12">
                        <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white lg:text-7xl text-4xl">
                            Cart
                        </div>
                        <img
                            src="/assets/header-bg.jpg"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="col-span-full lg:col-span-8 grid place-items-center ">
                        <div className="text-2xl font-light z-10">
                            Your cart is Empty!
                        </div>
                        <div className="h-[388px] -mb-6 -mt-2">
                            <img
                                src="/assets/cart-empty.svg"
                                className="h-full"
                            />
                        </div>
                        <Link to="/menu" className="btn">
                            Go to the memu
                        </Link>
                    </div>
                    <div className="col-span-4 hidden lg:block">
                        <NavMenu />
                    </div>
                </div>
            </div>
        );

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[1400px] grid lg:grid-cols-12 gap-12 px-2 md:px-4">
                <div className="col-span-full flex justify-center relative max-h-[140px] w-full mt-12">
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white lg:text-7xl text-4xl">
                        Cart
                    </div>
                    <img
                        src="/assets/header-bg.jpg"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <table className="w-full col-span-full lg:col-span-8 rounded-lg shadow-lg overflow-hidden border-2 border-dark/15 text-sm md:text-lg">
                    <thead className="border-b-2 border-dark/15">
                        <tr className="grid grid-cols-8 text-center tracking-wider capitalize py-2 px-1">
                            <th className="col-span-5">Item</th>
                            <th className="col-span-1">Price</th>
                            <th className="col-span-1">Quantity</th>
                            <th className="col-span-1">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr className="grid grid-cols-8 text-center items-center border-b-2 border-dark/15 py-1">
                                <td className="col-span-1 flex justify-center">
                                    <IcBin
                                        className="text-xl text-danger hover:text-danger-dark transition-all duration-300 cursor-pointer"
                                        onClick={() => deleteHandler(item)}
                                    />
                                </td>
                                <Link
                                    to={`/menu/item/${item.item.id.replace(
                                        " ",
                                        "-"
                                    )}`}
                                    className="hidden md:block md:col-span-2 h-[100px] w-[100px] "
                                >
                                    <img
                                        src={item.item.imageURL}
                                        className="object-cover w-full h-full rounded-md"
                                    />
                                </Link>
                                <Link
                                    to={`/menu/item/${item.item.id.replace(
                                        " ",
                                        "-"
                                    )}`}
                                    className="col-span-4 md:col-span-2 md:-ml-8 flex items-center gap-4"
                                >
                                    <div className="flex">
                                        <span className="max-w-[full] line-clamp-1 capitalize">
                                            {item.item.id}
                                        </span>
                                        {item.order.option !== "_" && (
                                            <span className="uppercase text-primary">
                                                {`(${item.order.option})`}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                                <td className="col-span-1">
                                    {item.order.price} DH
                                </td>
                                <td className="col-span-1">
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={item.order.quantity}
                                        onChange={(e) =>
                                            quantityHandler(e, item)
                                        }
                                    />
                                </td>
                                <td className="col-span-1">
                                    {item.order.price * item.order.quantity} DH
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="col-span-full lg:col-span-4 border-2 border-dark/15 shadow-lg rounded-lg px-6 py-8">
                    <div className="text-2xl uppercase">Cart Totals</div>
                    <div className="flex gap-x-6 mt-4">
                        <div>
                            <div>Subtotal</div>
                            <div className="mt-1">Total</div>
                        </div>
                        <div>
                            <div className="text-xl">{total - 20} DH</div>
                            <div className="text-2xl text-primary">
                                {total} DH
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-base space-x-3 mb-4">
                        <input
                            type="checkbox"
                            checked
                            name="payment-at-delivery"
                        />
                        <label htmlFor="payment-at-delivery">
                            Payment at delivery
                        </label>
                    </div>
                    <Link
                        to="/menu/cart/checkout"
                        className="btn flex justify-center items-center gap-x-4"
                    >
                        <IcSuccess className="text-xl" />
                        <span>Proceed to checkout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
