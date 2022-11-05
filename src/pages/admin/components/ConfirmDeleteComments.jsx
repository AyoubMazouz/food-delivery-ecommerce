import React from "react";
import { useAlert } from "../../../contexts/AlertContext";
import useComment from "../../../hooks/useComment";

const ConfirmDeleteComments = ({ id, setCurrModel }) => {
    const { deleteComments } = useComment();
    const { setAlert } = useAlert();
    return (
        <div className="max-w-[400px] w-full">
            <div className="text-lx font-semibold">Deleting all comments</div>
            <div className="my-">
                Are you sure you wants to delete all comments that belong to the
                item ID <span>{" < " + id + " >"}</span>
            </div>
            <div className="flex justify-between">
                <button className="btn" onClick={() => setCurrModel(null)}>
                    Cancel
                </button>
                <button
                    className="btn-danger"
                    onClick={() => {
                        deleteComments(id);
                        setCurrModel(null);
                        setAlert(["success", "All comments has been deleted!"]);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ConfirmDeleteComments;
