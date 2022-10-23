import React from "react";
import Model from "../../../components/Model";
import SidePanel from "../components/SidePanel";

import useOrder from "../../../hooks/useOrder";
import { useAlert } from "../../../contexts/AlertContext";
import AddOrder from "./AddOrder";
import ViewOrder from "./ViewOrder";

import { IcBin } from "../../../data/icons";
import ConfirmDeleteOrder from "../components/ConfirmDeleteOrder";

const Orders = () => {
    const [currModel, setCurrModel] = React.useState(null);
    const [orders, setOrders] = React.useState([]);

    const { getOrders, deleteOrder } = useOrder();

    const { setAlert } = useAlert();

    React.useEffect(() => {
        getOrders(setOrders);
        document.title = "Dashboard - Orders";
    }, []);

    // Filter.
    const [confirmed, setConfirmed] = React.useState(true);
    const [_new, setNew] = React.useState(true);
    const [delivered, setDelivered] = React.useState(true);
    const [canceled, setCanceled] = React.useState(true);

    const filteredLs = orders.filter((order) => {
        if (_new && order.status === 0) return true;
        else if (confirmed && order.status === 1) return true;
        else if (delivered && order.status === 2) return true;
        else if (canceled && order.status === 3) return true;
        return false;
    });

    const deleteHandler = (order) => {
        const args = {
            id: order.id,
            setCurrModel,
            title: `Deleting Order ID: ${order.id}`,
        };

        if (order.status === 0) {
            args.message =
                "Are you sure you want to delete Unconfirmed orders?";
            setCurrModel(<ConfirmDeleteOrder {...args} />);
        } else if (order.status === 1) {
            args.message = "Are you sure you want to delete unfinished orders";
            setCurrModel(<ConfirmDeleteOrder {...args} />);
        } else {
            deleteOrder(order.id);
            setAlert(["success", "Order has been deleted!"]);
        }
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
                                <label htmlFor="new">New</label>
                                <input
                                    type="checkbox"
                                    name="new"
                                    value="new"
                                    checked={_new}
                                    onChange={(e) => setNew(e.target.checked)}
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="confirmed">Confirmed</label>
                                <input
                                    type="checkbox"
                                    name="confirmed"
                                    value="confirmed"
                                    checked={confirmed}
                                    onChange={(e) =>
                                        setConfirmed(e.target.checked)
                                    }
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="delivered">Delivered</label>
                                <input
                                    type="checkbox"
                                    name="delivered"
                                    value="delivered"
                                    checked={delivered}
                                    onChange={(e) =>
                                        setDelivered(e.target.checked)
                                    }
                                />
                            </div>
                            <div className="space-x-1">
                                <label htmlFor="canceled">Canceled</label>
                                <input
                                    type="checkbox"
                                    name="canceled"
                                    value="canceled"
                                    checked={canceled}
                                    onChange={(e) =>
                                        setCanceled(e.target.checked)
                                    }
                                />
                            </div>
                        </div>
                        <button
                            onClick={() =>
                                setCurrModel(
                                    <AddOrder setCurrModel={setCurrModel} />
                                )
                            }
                            className="btn"
                        >
                            Add
                        </button>
                    </div>
                    {/* View */}
                    <div className="w-full mt-2 h-[85vh] overflow-y-scroll">
                        <table className="w-full rounded-lg">
                            <thead className="bg-primary text-secondary border-b-2 border-secondary">
                                <tr className="text-left tracking-wider text-sm lg:text-base capitalize grid grid-cols-12 py-2 px-1">
                                    <th className="col-span-2">ID</th>
                                    <th className="col-span-4">Address</th>
                                    <th className="col-span-1">Total</th>
                                    <th className="col-span-2 text-center">
                                        Status
                                    </th>
                                    <th className="col-span-2">Date</th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 border-secondary">
                                {filteredLs.map((order) => (
                                    <tr
                                        key={order.id}
                                        className={`grid grid-cols-12 text-left px-1 text-sm lg:text-base ${
                                            order.status === 2
                                                ? "bg-success/50"
                                                : order.status === 3
                                                ? "bg-danger/50"
                                                : "nth-child"
                                        }`}
                                    >
                                        <th
                                            className="col-span-2 font-light underline cursor-pointer"
                                            onClick={() =>
                                                setCurrModel(
                                                    <ViewOrder
                                                        order={order}
                                                        setCurrModel={
                                                            setCurrModel
                                                        }
                                                    />
                                                )
                                            }
                                        >
                                            {order.id}
                                        </th>
                                        <th className="col-span-4 font-light">
                                            {order.address}
                                        </th>
                                        <th className="col-span-1 font-light">
                                            {order.total}
                                        </th>
                                        <th className="col-span-2 font-light text-center">
                                            <span
                                                className={`px-2 rounded ${
                                                    order.status === 0
                                                        ? "bg-warn"
                                                        : order.status === 1
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
                                        </th>
                                        <th className="col-span-2 font-light">
                                            {order.createdAtStr}
                                        </th>
                                        <th className="col-span-1 flex gap-x-2">
                                            <IcBin
                                                className="text-xl text-danger hover:text-danger-dark transition-all duration-300 cursor-pointer"
                                                onClick={(e) =>
                                                    deleteHandler(order)
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

export default Orders;
