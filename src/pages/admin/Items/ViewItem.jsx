import React from "react";

const ViewItem = ({
    id,
    tags,
    sizes,
    description,
    imageURL,
    createdAtStr,
    modifiedAtStr,
}) => {
    return (
        <div className="max-w-[700px]">
            <img
                src={imageURL}
                alt={id}
                className="w-full max-w-[256px] rounded shadow-md"
            />
            <div className="font-light">
                <span className="font-medium">ID: </span>
                {id}
            </div>
            <div className="font-light">
                <span className="font-medium">Tags: </span>
                {tags}
            </div>
            <div className="font-light">
                <span className="font-medium">Created At: </span>
                {createdAtStr}
            </div>
            <div className="font-light">
                <span className="font-medium">Last Modified: </span>
                {modifiedAtStr}
            </div>
            <div>
                <div className="font-medium">Sizes: </div>
                {sizes.map((size) => (
                    <div className="font-light">
                        <span>{size.label} : </span>
                        <span>{size.price}</span>
                    </div>
                ))}
            </div>
            <div className="font-light">
                <span className="font-medium">Description: </span>
                {description}
            </div>
        </div>
    );
};

export default ViewItem;
