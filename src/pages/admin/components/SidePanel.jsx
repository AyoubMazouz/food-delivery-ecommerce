import React from "react";
import { Link } from "react-router-dom";
import {
    IcEmail,
    IcMessage,
    IcItem,
    IcOrder,
    IcDashboard,
    IcSettings,
} from "../../../data/icons";
import { useLocation } from "react-router-dom";

const SidePanel = () => {
    const location = useLocation();
    const l = location.pathname;
    return (
        <div className="bg-light h-full w-full max-w-[70px] md:max-w-[160px] lg:max-w-[220px] border-2 border-r-secondary px-2 lg:px-4 shadow-md">
            <ul className="space-y-4 px-2 py-6">
                <Link
                    to="/admin"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin" && "text-primary"}`}
                >
                    <IcDashboard className="text-4xl" />
                    <span className="hidden md:block">Dashboard</span>
                </Link>
                <Link
                    to="/admin/orders"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin/orders" && "text-primary"}`}
                >
                    <IcOrder className="text-4xl" />
                    <span className="hidden md:block">Orders</span>
                </Link>
                <Link
                    to="/admin/items"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin/items" && "text-primary"}`}
                >
                    <IcItem className="text-4xl" />
                    <span className="hidden md:block">Items</span>
                </Link>
                <Link
                    to="/admin/messages"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin/messages" && "text-primary"}`}
                >
                    <IcMessage className="text-4xl" />
                    <span className="hidden md:block">Messages</span>
                </Link>
                <Link
                    to="/admin/emails"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin/emails" && "text-primary"}`}
                >
                    <IcEmail className="text-4xl" />
                    <span className="hidden md:block">Emails</span>
                </Link>
                <Link
                    to="/admin/settings"
                    className={`font-light hover:text-primary transition-all duration-300 flex gap-x-3 items-center cursor-pointer border-b-2 pb-3 ${l ===
                        "/admin/settings" && "text-primary"}`}
                >
                    <IcSettings className="text-4xl" />
                    <span className="hidden md:block">Settings</span>
                </Link>
            </ul>
        </div>
    );
};

export default SidePanel;
