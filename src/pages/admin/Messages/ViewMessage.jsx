import React from "react";
import useMessage from "../../../hooks/useMessage";

const ViewItem = ({ msg }) => {
    const { markMsgAsRead } = useMessage();

    React.useEffect(() => {
        markMsgAsRead(msg);
    }, []);

    return (
        <div className="w-full">
            <div className="font-light">
                <span className="font-medium">ID: </span>
                {msg.id}
            </div>
            <div className="font-light">
                <span className="font-medium">fullName: </span>
                {msg.fullName}
            </div>
            <div className="font-light">
                <span className="font-medium">email: </span>
                {msg.email}
            </div>
            <div className="font-light">
                <span className="font-medium">Date: </span>
                {msg.createdAtStr}
            </div>
            <div className="font-light">
                <span className="font-medium">Message: </span>
                {msg.message}
            </div>
        </div>
    );
};

export default ViewItem;
