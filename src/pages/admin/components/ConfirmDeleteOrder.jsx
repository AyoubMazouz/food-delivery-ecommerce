import React from "react";
import useOrder from "../../../hooks/useOrder";
import { useAlert } from "../../../contexts/AlertContext";

const ConfirmDelete = ({ title, message, id, setCurrModel }) => {
    const { deleteOrder } = useOrder();
    const { setAlert } = useAlert();
    return (
        <div className="max-w-[400px] w-full">
            <div className="text-lx font-semibold">{title}</div>
            <div className="my-">{message}</div>
            <div className="flex justify-between">
                <button className="btn" onClick={() => setCurrModel(null)}>
                    Cancel
                </button>
                <button
                    className="btn-danger"
                    onClick={() => {
                        deleteOrder(id);
                        setCurrModel(null);
                        setAlert(["success", "Order has been deleted!"]);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ConfirmDelete;
