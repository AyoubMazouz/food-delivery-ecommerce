import React from "react";
// Hooks & Contexts.
import useItem from "../../../hooks/useItem";
import { useAlert } from "../../../contexts/AlertContext";
// Components.
import Model from "../../../components/Model";
import SidePanel from "../components/SidePanel";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import ViewItem from "./ViewItem";
import ConfirmDeleteItem from "../components/ConfirmDeleteItem";
// Icons.
import { IcBin, IcEdit } from "../../../data/icons";

const Items = () => {
    const [currModel, setCurrModel] = React.useState(false);
    const [items, setItems] = React.useState([]);

    // Hooks.
    const { getItems } = useItem();
    // Context.
    const { setAlert } = useAlert();

    // Initial load.
    React.useEffect(() => {
        getItems(setItems);
        document.title = "Dashboard - Items";
    }, []);

    // Filter.
    const [burger, setBurger] = React.useState(true);
    const [pizza, setPizza] = React.useState(true);
    const [pasta, setPasta] = React.useState(true);
    const [drink, setDrink] = React.useState(true);
    const [desert, setDesert] = React.useState(true);
    const [search, setSearch] = React.useState("");
    const filteredLs = React.useMemo(
        () =>
            items
                .filter((item) => {
                    if (burger && item.tags === "burger") return true;
                    else if (pizza && item.tags === "pizza") return true;
                    else if (pasta && item.tags === "pasta") return true;
                    else if (drink && item.tags === "drink") return true;
                    else if (desert && item.tags === "desert") return true;
                    return false;
                })
                .filter((item) => {
                    const s = search.trim(" ");
                    if (s.length) return s.length && item.id.includes(s);
                    return true;
                }),
        [items, burger, pizza, pasta, drink, desert, search]
    );

    const deleteItemHandle = (item) => {
        const args = {
            id: item.id,
            setCurrModel,
            title: `Deleting Order ID: ${item.id}`,
            message: "Are you sure you want to delete this Item?",
        };

        setCurrModel(<ConfirmDeleteItem {...args} />);
    };

    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-[1400px] ">
                <SidePanel />
                <div className="w-full">
                    {/* Filter */}
                    <div className="flex justify-between items-center gap-x-4 pt-4 px-2">
                        <div className="flex flex-wrap gap-x-4">
                            <div className="space-x-1">
                                <label htmlFor="burger">burger</label>
                                <input
                                    type="checkbox"
                                    name="burger"
                                    value="burger"
                                    checked={burger}
                                    onChange={(e) =>
                                        setBurger(e.target.checked)
                                    }
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="pizza">pizza</label>
                                <input
                                    type="checkbox"
                                    name="pizza"
                                    value="pizza"
                                    checked={pizza}
                                    onChange={(e) => setPizza(e.target.checked)}
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="pasta">pasta</label>
                                <input
                                    type="checkbox"
                                    name="pasta"
                                    value="pasta"
                                    checked={pasta}
                                    onChange={(e) => setPasta(e.target.checked)}
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="drink">drink</label>
                                <input
                                    type="checkbox"
                                    name="drink"
                                    value="drink"
                                    checked={drink}
                                    onChange={(e) => setDrink(e.target.checked)}
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="desert">desert</label>
                                <input
                                    type="checkbox"
                                    name="desert"
                                    value="desert"
                                    checked={desert}
                                    onChange={(e) =>
                                        setDesert(e.target.checked)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            className="admin-form-input max-w-[160px]"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            onClick={() =>
                                setCurrModel(
                                    <AddItem setCurrModel={setCurrModel} />
                                )
                            }
                            className="btn"
                        >
                            Add
                        </button>
                    </div>
                    {/* View */}
                    <div className="w-full mt-2 h-[79vh] overflow-y-scroll">
                        <table className="w-full rounded-lg">
                            <thead className="bg-primary text-secondary border-b-2 border-secondary">
                                <tr className="text-left tracking-wider text-sm lg:text-base capitalize grid grid-cols-12 py-2 px-1">
                                    <th className="col-span-5">ID</th>
                                    <th className="col-span-3">Tags</th>
                                    <th className="col-span-3">Modified</th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 border-secondary">
                                {filteredLs.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="grid grid-cols-12 text-left px-1 text-sm lg:text-base nth-child"
                                    >
                                        <th
                                            className="col-span-5 font-light underline cursor-pointer"
                                            onClick={() =>
                                                setCurrModel(
                                                    <ViewItem
                                                        setCurrModel={
                                                            setCurrModel
                                                        }
                                                        {...item}
                                                    />
                                                )
                                            }
                                        >
                                            {item.id}
                                        </th>
                                        <th className="col-span-3 font-light">
                                            {item.tags}
                                        </th>
                                        <th className="col-span-3 font-light">
                                            {item.modifiedAtStr}
                                        </th>
                                        <th className="col-span-1 flex gap-x-2">
                                            <IcEdit
                                                className="text-xl text-info hover:text-info-dark transition-all duration-300 cursor-pointer"
                                                onClick={() =>
                                                    setCurrModel(
                                                        <EditItem
                                                            {...{
                                                                ...item,
                                                                setCurrModel,
                                                            }}
                                                        />
                                                    )
                                                }
                                            />
                                            <IcBin
                                                className="text-xl text-danger hover:text-danger-dark transition-all duration-300 cursor-pointer"
                                                onClick={() =>
                                                    deleteItemHandle(item)
                                                }
                                            />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Model */}
                {currModel && (
                    <Model setState={setCurrModel}>{currModel}</Model>
                )}
            </div>
        </div>
    );
};

export default Items;
