import React from "react";
// Hooks & Contexts.
import useMessage from "../../../hooks/useMessage";
// Components.
import Model from "../../../components/Model";
import SidePanel from "../components/SidePanel";
import AddMessage from "./AddMessage";
import ViewMessage from "./ViewMessage";
// Icons
import { IcBin } from "../../../data/icons";

const Messages = () => {
    const [currModel, setCurrModel] = React.useState(null);
    const [messages, setMessages] = React.useState([]);

    const { getMessages, deleteMessage } = useMessage();

    React.useEffect(() => {
        getMessages(setMessages);
        // Set PageTitle.
        document.title = "Dashboard - Messages";
    }, []);

    const deleteHandle = (id) => {
        deleteMessage(id);
    };
    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-[1400px]">
                <SidePanel />
                <div className="w-full">
                    {/* Filter */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={() =>
                                setCurrModel(
                                    <AddMessage setCurrModel={setCurrModel} />
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
                                    <th className="col-span-2">ID</th>
                                    <th className="col-span-2">userName</th>
                                    <th className="col-span-5">Email</th>
                                    <th className="col-span-2">Date</th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 border-secondary">
                                {messages.map((msg) => (
                                    <tr
                                        key={msg.id}
                                        className={`grid grid-cols-12 text-left px-1 text-sm lg:text-base ${
                                            msg.status
                                                ? "nth-child"
                                                : "bg-success/50"
                                        }`}
                                    >
                                        <th
                                            className="col-span-2 font-light underline cursor-pointer"
                                            onClick={() =>
                                                setCurrModel(
                                                    <ViewMessage msg={msg} />
                                                )
                                            }
                                        >
                                            {msg.id}
                                        </th>
                                        <th className="col-span-2 font-light">
                                            {msg.fullName}
                                        </th>
                                        <th className="col-span-5 font-light">
                                            {msg.email}
                                        </th>
                                        <th className="col-span-2 font-light">
                                            {msg.createdAtStr}
                                        </th>
                                        <th className="col-span-1 flex gap-x-2">
                                            <IcBin
                                                className="text-xl text-danger hover:text-danger-dark transition-all duration-300 cursor-pointer"
                                                onClick={() =>
                                                    deleteHandle(msg.id)
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

export default Messages;
