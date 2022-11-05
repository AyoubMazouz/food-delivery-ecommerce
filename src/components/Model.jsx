import React from "react";
import { IcX } from "../data/icons";

const Model = ({ setState, children }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-secondary/50 flex items-center justify-center z-40">
            <div className="overflow-hidden max-w-[900px] max-h-[90vh] w-full shadow-lg rounded-lg border-2 border-secondary">
                <div className="relative bg-light py-12 px-2 md:px-4 max-w-[900px] max-h-[80vh] overflow-y-scroll">
                    <IcX
                        className="absolute top-4 right-4 scale-[2] hover:text-primary transition-all duration-500 cursor-pointer hover:rotate-90"
                        onClick={() => setState(null)}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Model;
