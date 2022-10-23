import React, { useEffect } from "react";
import useItem from "../../../hooks/useItem";
import { resizeImg } from "../../../util/image";
// Hooks Imports.

// Contexts Imports.
import { useAlert } from "../../../contexts/AlertContext";
import { IcPlus } from "../../../data/icons";

const availableTags = ["pizza", "burger", "pasta", "desert", "drink"];

const AddItem = ({ setCurrModel }) => {
    // Form Fields.
    const [id, setId] = React.useState("");
    const [tags, setTags] = React.useState("");
    const [options, setOptions] = React.useState([{ label: "", price: "" }]);
    const [description, setDescription] = React.useState("");
    const [file, setFile] = React.useState(0);

    const [image, setImage] = React.useState([]);
    const [displayImg, setDisplayImg] = React.useState([]);

    // Hooks.
    const { addItem, loading } = useItem();
    // Context.
    const { setAlert } = useAlert();

    // Handle File Dialog
    useEffect(() => {
        if (file) {
            setImage(file);
            // Returns 64 Base String.
            resizeImg(file, 512, 512).then((imgURL) => setDisplayImg(imgURL));
        }
    }, [file]);

    // Size Field Functions.
    const optionChangeHandler = (e, index, secIndex) => {
        e.preventDefault();
        const tempLs = [...options];
        tempLs[index][secIndex] = e.target.value;
        setOptions(tempLs);
    };

    const addOption = (e) => {
        e.preventDefault();
        const emptyCells = options.filter(
            (option) =>
                option.label.trim(" ").length === 0 ||
                option.price.trim(" ").length === 0
        );

        if (emptyCells.length) {
            setAlert(["warn", "Fill all fields before adding new ones."]);
        } else {
            setOptions([...options, { label: "", price: "" }]);
        }
    };

    const deleteOption = (e, index) => {
        e.preventDefault();
        if (options.length <= 1) {
            if (
                options[0].label.trim(" ").length === 0 ||
                options[0].price.trim(" ").length === 0
            ) {
                setAlert(["warn", "Fields are already empty!"]);
            }
            return setOptions([{ label: "", price: "" }]);
        }

        const tempLs = options.filter((_, i) => i !== index);

        setOptions(tempLs);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Form validation.

        try {
            await addItem(id.toLowerCase(), tags, options, description, image);
            setAlert(["success", "Item has been added successfully!"]);
            setCurrModel(null);
        } catch (err) {
            if (err === "id_taken")
                setAlert([
                    "warn",
                    "Item Id already in use, try something different.",
                ]);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-3">
                <div className="model-header">Add An Item</div>
                <div className="col-span-2">
                    <label htmlFor="id" className="form-label">
                        Id
                    </label>
                    <input
                        type="text"
                        name="id"
                        required
                        className="form-input"
                        placeholder="Item name..."
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="tag" className="form-label">
                        tags
                    </label>
                    <select
                        name="tag"
                        className="form-input"
                        required
                        onChange={(e) => setTags(e.target.value)}
                    >
                        {availableTags.map((tag) => (
                            <option value={tag} key={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-3 w-full items-center">
                    <label htmlFor="size" className="form-label">
                        Option
                    </label>
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <button className="btn" onClick={addOption}>
                        Add
                    </button>
                    {/* Options */}
                    {options.map((option, index) => (
                        <>
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="size"
                                    className="form-input"
                                    required
                                    placeholder="Option..."
                                    key={index}
                                    value={option.label}
                                    onChange={(e) =>
                                        optionChangeHandler(e, index, "label")
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    type="number"
                                    name="price"
                                    className="form-input"
                                    required
                                    placeholder="Price"
                                    key={index + 100}
                                    value={option.price}
                                    onChange={(e) =>
                                        optionChangeHandler(e, index, "price")
                                    }
                                />
                            </div>
                            <button
                                key={index + 200}
                                className="btn bg-red-500 ring-red-500"
                                onClick={(e) => deleteOption(e, index)}
                            >
                                Delete
                            </button>
                        </>
                    ))}
                </div>
                <div className="col-span-2">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="form-input"
                        placeholder="Description..."
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="file" className="form-label">
                        Images
                    </label>
                    <div className="flex justify-between">
                        <div className="flex relative h-10 w-20 group">
                            <input
                                type="file"
                                name="file"
                                accept=".jpg, .jpeg, .png, .webp"
                                required
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

export default AddItem;
