import React from "react";
// Components.
import SidePanel from "./components/SidePanel";
import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";

const AboutApp = () => {
    const { logOut } = useAuth();
    const { setAlert } = useAlert();
    const handleLogOut = async () => {
        try {
            const res = await logOut();
            if (res) setAlert(["info", "You have logged out!"]);
        } catch (err) {
            setAlert(["info", "Something went wrong, Please try again."]);
        }
    };
    return (
        <div className="flex justify-center">
            <div className="flex w-full h-full max-w-[1400px]">
                <SidePanel />
                <div className="w-full">
                    <button className="btn" onClick={handleLogOut}>
                        LogOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutApp;
