import React from "react";
import SidePanel from "./components/SidePanel";

const Dashboard = () => {
    React.useEffect(() => {
        document.title = "Dashboard";
    }, []);
    return (
        <div className="w-full flex justify-center">
            <div className="flex h-[85vh] overflow-y-scroll w-full max-w-[1400px]">
                <SidePanel />
                <div className="">
                    <h1 className="text-xl font-semibold text-sky-500 mb-6">
                        Dashboard
                    </h1>
                    {/* View */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
