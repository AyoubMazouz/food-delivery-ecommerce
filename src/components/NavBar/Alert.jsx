import React, { useEffect } from "react";
import { useAlert } from "../../contexts/AlertContext";
import { IcInfo, IcSuccess, IcWarn, IcX } from "../../data/icons";

const Alert = () => {
    const { alert, setAlert } = useAlert(null);

    // Close the model after certain amount of the.
    useEffect(() => {
        const sub = setTimeout(() => {
            setAlert(null);
        }, 10000);

        return () => clearTimeout(sub);
    }, [alert]);

    return (
        alert && (
            <div
                className={`px-6 md:px-12 py-8 bg-${alert[0]} border-${alert[0]}-dark border-2 fixed top-16 left-[50%] translate-x-[-50%] z-50 shadow-lg rounded-md min-w-[350px] max-w-[900px]`}
            >
                <IcX
                    onClick={() => setAlert(null)}
                    className={`scale-[2] absolute top-4 right-4 hover:rotate-90 transition-all duration-300 text-${alert[0]}-dark cursor-pointer`}
                />

                <div
                    className={`text-${alert[0]}-dark flex gap-x-2 items-center`}
                >
                    {
                        {
                            danger: (
                                <IcWarn className="text-3xl text-danger-dark" />
                            ),
                            warn: (
                                <IcWarn className="text-3xl text-danger-dark" />
                            ),
                            info: (
                                <IcInfo className="text-3xl text-info-dark" />
                            ),
                            success: (
                                <IcSuccess className="text-3xl text-success-dark" />
                            ),
                        }[alert[0]]
                    }
                    {alert[1]}
                </div>
            </div>
        )
    );
};

export default Alert;
