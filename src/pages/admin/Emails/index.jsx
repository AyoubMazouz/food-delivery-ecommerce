import React from "react";
import Model from "../../../components/Model";
import useEmail from "../../../hooks/useEmail";
import SidePanel from "../components/SidePanel";

import AddEmail from "./AddEmail";

import { IcBin } from "../../../data/icons";

const Emails = () => {
    const [currModel, setCurrModel] = React.useState(false);
    const [emails, setEmails] = React.useState([]);
    const [updateTrigger, setUpdateTrigger] = React.useState(false);

    const { getEmails, deleteEmail } = useEmail();

    React.useEffect(() => {
        document.title = "Dashboard - Emails";
    }, []);

    React.useEffect(() => {
        getEmails().then((emailsDoc) => setEmails(emailsDoc));
    }, [currModel, updateTrigger]);

    const deleteHandle = (email) => {
        deleteEmail(email);
        setUpdateTrigger(!updateTrigger);
    };

    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-[1400px] ">
                <SidePanel />
                <div className="w-full">
                    {/* Filter */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={() => setCurrModel(<AddEmail />)}
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
                                    <th className="col-span-8">Emails</th>
                                    <th className="col-span-3">Added</th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 border-secondary">
                                {emails &&
                                    emails.map((email) => (
                                        <tr
                                            key={email.email}
                                            className="grid grid-cols-12 text-left px-1 text-sm lg:text-base nth-child"
                                        >
                                            <th className="col-span-8 font-light underline cursor-pointer">
                                                {email.email}
                                            </th>
                                            <th className="col-span-3 font-light">
                                                {email.createdAt}
                                            </th>
                                            <th className="col-span-1 flex gap-x-2">
                                                <IcBin
                                                    className="text-xl text-danger hover:text-danger-dark transition-all duration-300 cursor-pointer"
                                                    onClick={() =>
                                                        deleteHandle(
                                                            email.email
                                                        )
                                                    }
                                                />
                                            </th>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Model */}
            {currModel && <Model setState={setCurrModel}>{currModel}</Model>}
        </div>
    );
};

export default Emails;
