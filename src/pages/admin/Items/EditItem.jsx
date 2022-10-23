import React, { useEffect } from "react";
// Hooks & Contexts.
import useItem from "../../../hooks/useItem";
import { useAlert } from "../../../contexts/AlertContext";
// Icons & Util.
import { IcPlus } from "../../../data/icons";
import { resizeImg } from "../../../util/image";

const availableTags = ["pizza", "burger", "pasta", "desert", "drink"];

const EditItem = ({
    id: _id,
    tags: _tags,
    description: _desc,
    imageURL: _img,
    sizes: _s,
    createdAt,
    setCurrModel,
}) => {
    const [id, setId] = React.useState(_id);
    // Form Fields.
    const [tags, setTags] = React.useState(_tags);
    const [option, setOption] = React.useState(_s);
    const [description, setDescription] = React.useState(_desc);
    const [file, setFile] = React.useState(0);

    // File.
    const [image, setImage] = React.useState(_img);
    // String.
    const [displayImg, setDisplayImg] = React.useState(_img);

    const { updateItem, loading } = useItem();
    const { setAlert } = useAlert();

    // Handle File Dialog.
    useEffect(() => {
        if (file) {
            setImage(file);
            resizeImg(file, 512, 512).then((dataURL) => setDisplayImg(dataURL));
        }
    }, [file]);

    const optionChangeHandler = (e, index, secIndex) => {
        e.preventDefault();
        const tempLs = [...option];

        tempLs[index][secIndex] = e.target.value;

        setOption(tempLs);
    };

    // Add new Fields To add Additional Option.
    const addOption = (e) => {
        e.preventDefault();
        const emptyCells = option.filter(
            (option) =>
                option.label.trim(" ").length === 0 ||
                option.price.trim(" ").length === 0
        );

        if (emptyCells.length) {
            setAlert(["warn", "Fill all fields before adding new ones."]);
        } else {
            setOption([...option, { label: "", price: "" }]);
        }
    };

    // Delete an Option.
    const deleteOption = (e, index) => {
        e.preventDefault();
        if (option.length <= 1) {
            if (
                option[0].label.trim(" ").length === 0 ||
                option[0].price.trim(" ").length === 0
            ) {
                setAlert(["warn", "Fields are already empty!"]);
            }
            return setOption([{ label: "", price: "" }]);
        }

        const tempLs = option.filter((_, i) => i !== index);

        setOption(tempLs);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Form validation.

        try {
            await updateItem(id, tags, option, description, image, createdAt);
            setAlert(["success", "Item has been Updated!"]);
            setCurrModel(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-3">
                <div className="model-header">Edit Item</div>
                <div className="col-span-2">
                    <label htmlFor="id" className="admin-form-label">
                        Id
                    </label>
                    <input
                        type="text"
                        name="id"
                        className="admin-form-input"
                        required
                        disabled
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="tag" className="admin-form-label">
                        tags
                    </label>
                    <select
                        name="tag"
                        className="admin-form-input"
                        required
                        defaultValue="select a tag"
                        onChange={(e) => setTags(e.target.value)}
                    >
                        <option value="select a tag">select a tag</option>
                        {availableTags &&
                            availableTags.map((tag) => (
                                <option value={tag}>{tag}</option>
                            ))}
                    </select>
                </div>
                {/* Option */}
                <div className="grid grid-cols-3 gap-x-6 gap-y-3 w-full">
                    <label htmlFor="sizes" className="admin-form-label">
                        Price
                    </label>
                    <label htmlFor="sizes" className="admin-form-label">
                        Size
                    </label>
                    <div></div>
                    {option &&
                        option.map((size, index) => {
                            return (
                                <>
                                    <div className="w-full" key={index}>
                                        <input
                                            type="text"
                                            name="sizes"
                                            className="admin-form-input"
                                            required
                                            value={size.label}
                                            onChange={(e) =>
                                                optionChangeHandler(
                                                    e,
                                                    index,
                                                    "label"
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="w-full" key={index + 100}>
                                        <input
                                            type="number"
                                            name="sizes"
                                            className="admin-form-input"
                                            required
                                            value={size.price}
                                            onChange={(e) =>
                                                optionChangeHandler(
                                                    e,
                                                    index,
                                                    "price"
                                                )
                                            }
                                        />
                                    </div>
                                    <button
                                        className="btn bg-red-500 ring-red-500"
                                        onClick={(e) => deleteOption(e, index)}
                                        key={index + 200}
                                    >
                                        Delete
                                    </button>
                                </>
                            );
                        })}
                    <div></div>
                    <div></div>
                    <button className="btn" onClick={addOption}>
                        Add
                    </button>
                </div>
                <div className="col-span-2">
                    <label htmlFor="description" className="admin-form-label">
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="admin-form-input"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {/* Image */}
                <div>
                    <label htmlFor="file" className="admin-form-label">
                        Images
                    </label>
                    <div className="flex justify-between">
                        <div className="flex relative h-10 w-20 group">
                            <input
                                type="file"
                                name="file"
                                accept=".jpg, .jpeg, .png, .webp"
                                className="z-10 opacity-0 bg-green-200 h-full w-full cursor-pointer"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <div className="absolute bottom-0 bg-secondary  h-full w-full rounded shadow-md grid place-items-center">
                                <IcPlus className="scale-[1.4] nav-icon group-hover:text-primary" />
                            </div>
                        </div>
                        {
                            <img
                                src={displayImg}
                                className="max-w-[256px] rounded shadow-md"
                            />
                        }
                        <div>
                            <button
                                type="submit"
                                className="btn"
                                disabled={loading}
                            >
                                submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditItem;
