import React from "react";
// Hooks & Contexts.
import useOrder from "../../../hooks/useOrder";
import { useAlert } from "../../../contexts/AlertContext";
import useItem from "../../../hooks/useItem";
// Icons.
import { IcBin } from "../../../data/icons";

const AddOrder = () => {
    // Form Values.
    const [fullName, setFullName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [note, setNote] = React.useState("");
    const [orders, setOrders] = React.useState([]);

    // List Of every Item in the menu.
    const [itemsLs, setItemsLs] = React.useState([]);
    // Item To Order (ID).
    const [selectedItem, setSelectedItem] = React.useState("");

    const { addOrder, loading } = useOrder();
    const { getItems } = useItem();
    const { setAlert } = useAlert();

    React.useEffect(() => {
        getItems(setItemsLs);
    }, []);

    // Add selected Item to Order List & set Default values (can be changed later).
    const addItemToLs = (e) => {
        e.preventDefault();

        const orderObj = {
            label: selectedItem,
            id: selectedItem + Math.round(Math.random() * 100),
        };

        // Get the Right Item.
        itemsLs.forEach((item) => {
            if (item.id === selectedItem) {
                orderObj.sizes = item.sizes;
                orderObj.size = item.sizes[0];
                orderObj.quantity = 1;
            }
        });

        // If Item exist.
        if (orderObj.sizes) {
            setOrders([...orders, orderObj]);
        }
    };

    // Help select option for multiOption Items.
    const optionHandler = (e, id) => {
        const newOrderLs = JSON.parse(JSON.stringify(orders));
        newOrderLs.forEach((order) => {
            if (order.id === id) {
                order.size = e.target.value;
            }
        });
        setOrders(newOrderLs);
    };

    // Updates Item Quantity.
    const quantityHandler = (e, id) => {
        const newOrderLs = JSON.parse(JSON.stringify(orders));
        newOrderLs.forEach((order) => {
            if (order.id === id) {
                order.quantity = e.target.value;
                if (order.quantity == 0) order.quantity = 1;
            }
        });
        setOrders(newOrderLs);
    };
    // Delete Order.
    const deleteHandler = (id) => {
        const newOrderLs = orders.filter((order) => order.id !== id);
        setOrders(newOrderLs);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Form validation.

        const ordersLs = orders.map((order) => {
            return { ...order, sizes: null };
        });

        try {
            await addOrder(fullName, phone, note, address, ordersLs);
            setAlert(["success", "Order has been added successfully!"]);
        } catch (err) {
            if (err === "id_taken")
                setAlert([
                    "warn",
                    "Item Id already in use, try something different.",
                ]);
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            className="gap-x-4 gap-y-2 w-full grid grid-cols-2"
        >
            <div className="model-header col-span-2">Add An Order</div>
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
            {/* Order */}
            <div className="col-span-2">
                <div>
                    {orders.map((order) => (
                        <div className="grid grid-cols-12 gap-x-4 items-center">
                            <div className="col-span-5">
                                <label className="form-label">ID</label>
                                <label className="form-label">{order.id}</label>
                            </div>
                            <div className="col-span-3">
                                <label htmlFor="size" className="form-label">
                                    Option
                                </label>
                                <select
                                    name="size"
                                    className="form-input"
                                    required
                                    value={order.size}
                                    onChange={(e) => optionHandler(e, order.id)}
                                >
                                    <option value="">select a size</option>
                                    {order.sizes &&
                                        order.sizes.map((size) => (
                                            <option value={size.label}>
                                                {size.label}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="col-span-3">
                                <label
                                    htmlFor="quantity"
                                    className="form-label"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="form-input"
                                    required
                                    value={order.quantity}
                                    onChange={(e) =>
                                        quantityHandler(e, order.id)
                                    }
                                />
                            </div>
                            <IcBin
                                className="icon-bin translate-y-3"
                                onClick={(e) => deleteHandler(order.id)}
                            />
                        </div>
                    ))}
                </div>
                <label htmlFor="item" className="form-label">
                    Items
                </label>
                <div className="grid grid-cols-2 gap-x-4">
                    <select
                        name="item"
                        className="form-input"
                        required
                        placeholder="select an item"
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                    >
                        <option value={""}>select an item</option>
                        {itemsLs &&
                            itemsLs.map((item) => (
                                <option value={item.id}>{item.id}</option>
                            ))}
                    </select>
                    <button className="btn" onClick={addItemToLs}>
                        Add
                    </button>
                </div>
            </div>
            <div>
                <button type="submit" disabled={loading} className="btn">
                    submit
                </button>
            </div>
        </form>
    );
};

export default AddOrder;
