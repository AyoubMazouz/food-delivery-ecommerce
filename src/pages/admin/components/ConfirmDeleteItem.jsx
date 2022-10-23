import React from "react";
import useItem from "../../../hooks/useItem";
import { useAlert } from "../../../contexts/AlertContext";

const ConfirmDeleteItem = ({ title, message, id, setCurrModel }) => {
    const { deleteItem } = useItem();
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
                        deleteItem(id);
                        setCurrModel(null);
                        setAlert(["success", "Item has been deleted!"]);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ConfirmDeleteItem;
