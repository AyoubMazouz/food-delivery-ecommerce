import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAlert } from "../contexts/AlertContext";
import { useCart } from "../contexts/CartContext";
import useOrder from "../hooks/useOrder";

const Checkout = () => {
    const [fullName, setFullName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [note, setNote] = React.useState("");

    const navigate = useNavigate();

    const { cartItems, deleteCartItems } = useCart();
    const { addOrder } = useOrder();
    const { setAlert } = useAlert();

    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        if (cartItems.length) {
            const temp = cartItems.reduce(
                (acc, item) => acc + item.order.quantity * item.order.price,
                0
            );
            setTotal(temp);
            console.log(temp, cartItems);
        }
    }, [cartItems]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const orders = cartItems.map((item) => item.order);
        console.log(orders);

        try {
            await addOrder(fullName, phone, address, note, orders);
            deleteCartItems();
            setAlert(["success", "Your Order has been placed. "]);
            navigate("/menu/cart/thank-you");
        } catch {
            setAlert(["danger", "Something went wrong, please try again. "]);
        }
    };

    return (
        <div className="flex justify-center">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-[1400px] grid lg:grid-cols-12 gap-12 pt-12 px-2 md:px-4"
            >
                <div className="col-span-full lg:col-span-7">
                    <div>Billing details</div>
                    <div className="col-span-1">
                        <label htmlFor="fullName" className="form-label">
                            FullName
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Full name"
                            className="form-input"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Phone number..."
                            className="form-input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            className="form-input"
                            required
                            placeholder="Street address..."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="note" className="form-label">
                            Note
                        </label>
                        <textarea
                            name="note"
                            className="form-input"
                            required
                            placeholder="Write a note here..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-span-full lg:col-span-5 border-dark/15 shadow-lg rounded-lg overflow-hidden border-2 border-dark/15 text-base md:text-lg">
                    <table className="w-full">
                        <thead className="border-b-2 border-dark/15">
                            <tr className="grid grid-cols-8 tracking-wider capitalize py-4 px-2 text-left">
                                <th className="col-span-6">Item</th>
                                <th className="col-span-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr className="grid grid-cols-8 text-left items-center border-b-2 border-dark/15 py-1">
                                    <td className="flex col-span-6 max-w-[full] line-clamp-1 capitalize py-4 px-2">
                                        <span>{item.item.id}</span>
                                        <span className="text-primary">
                                            {"  *" + item.order.quantity}
                                        </span>
                                    </td>
                                    <td className="flex col-span-2">
                                        {item.order.quantity *
                                            item.order.price +
                                            " DH"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex flex-col items-end py-6 px-2 gap-y-4 border-b-2 border-dark/15 bg-secondary text-xl">
                        <div className="space-x-8">
                            <span>Subtotal</span>
                            <span className="text-3xl">{total + " DH"}</span>
                        </div>
                        <div className="space-x-11">
                            <span>Total</span>
                            <span className="text-4xl">
                                {total + 20 + " DH"}
                            </span>
                        </div>
                    </div>
                    <div className="px-2 py-6 text-center">
                        <div className="font-light text-sm">
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our{" "}
                            <Link
                                to="privacy-and-policy"
                                className="text-primary underline"
                            >
                                privacy policy.
                            </Link>
                        </div>
                        <button
                            type="Submit"
                            className="btn mx-auto w-[98%] mt-4"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
