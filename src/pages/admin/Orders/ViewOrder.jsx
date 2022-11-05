import React from "react";
import { useAlert } from "../../../contexts/AlertContext";
import useOrder from "../../../hooks/useOrder";

const ViewOrder = ({ order, setCurrModel }) => {
    const { nextStage, prevStage, cancel, deleteOrder, loading } = useOrder();
    const { setAlert } = useAlert();

    // Add 1 To status (order.status++)
    const nextStatHandler = async (e) => {
        e.preventDefault();

        // Make sure it doesn't keep going past 2, because 3 is CANCELED level.
        if (order.status == 2)
            return setAlert([
                "info",
                "Order is complete there are no other stages!",
            ]);

        const res = await nextStage(order);

        if (res) {
            if (order.status == 0)
                setAlert([
                    "success",
                    "Order has been confirmed and it is in the process of making!",
                ]);
            else if (order.status == 2) setAlert(["info", "Order delivered!"]);
        }
    };

    // Subtract 1 from status (order.status--)
    const prevStatHandler = async (e) => {
        e.preventDefault();

        // Make Sure it don't pass initial level.
        if (order.status == 0)
            return setAlert([
                "danger",
                "This the first stage (Confirmation), you can't go back further!",
            ]);

        const res = await prevStage(order);

        if (res) {
            setAlert([
                "warn",
                "you have gone back one step back toward delivering this order!",
            ]);
        }
    };

    const deleteHandler = (id) => {
        deleteOrder(id);
        setCurrModel(null);
        setAlert(["danger", `Order ID ${id} has been deleted!`]);
    };

    const cancelHandler = (id) => {
        cancel(id);
        setCurrModel(null);
        setAlert(["warn", `Order ID ${id} has been canceled!`]);
    };

    return (
        <div className="max-w-[900px] w-full">
            <div className="text-xl mb-4">Order ID: {order.id}</div>
            <div className="font-light">
                <span className="font-medium">FullName: </span>
                {order.fullName}
            </div>
            <div className="font-light">
                <span className="font-medium">Phone: </span>
                {order.phone}
            </div>
            <div className="font-light">
                <span className="font-medium">Address: </span>
                {order.address}
            </div>
            <div className="font-light">
                <span className="font-medium">Date: </span>
                {order.createdAtStr}
            </div>
            {/* Actual order */}
            <div>
                <div className="font-medium">Orders: </div>
                {order.orders.map((item) => (
                    <div className="font-light" key={item.id}>
                        <span>{item.label}: </span>
                        <span>{item.option}</span>
                        <span>{item.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="font-light">
                <span className="font-medium">Note: </span>
                {order.note}
            </div>
            <div>
                <span className="font-medium">Status: </span>
                <span
                    className={`px-2 rounded ${
                        order.status <= 1
                            ? "bg-info"
                            : order.status === 2
                            ? "bg-success"
                            : "bg-danger"
                    }`}
                >
                    {order.status === 0
                        ? "New"
                        : order.status === 1
                        ? "Confirmed"
                        : order.status === 2
                        ? "Delivered"
                        : "Canceled"}
                </span>
            </div>
            <div className="font-light mt-4 flex flex-wrap gap-x-4 items-center justify-between">
                <div className="space-x-2">
                    <button
                        className="btn-danger"
                        disabled={loading}
                        onClick={() => deleteHandler(order.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn-danger"
                        disabled={loading}
                        onClick={() => cancelHandler(order.id)}
                    >
                        Cancel
                    </button>
                </div>
                <div className="space-x-2">
                    <button
                        className="btn-info"
                        disabled={loading}
                        onClick={prevStatHandler}
                    >
                        Prev
                    </button>
                    <button
                        className="btn-success"
                        disabled={loading}
                        onClick={nextStatHandler}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewOrder;
