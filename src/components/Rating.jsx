import React from "react";
import { IcStar } from "../data/icons";

const Rating = ({ setRating, rating }) => {
    const [star1, setStar1] = React.useState(0);
    const [star2, setStar2] = React.useState(0);
    const [star3, setStar3] = React.useState(0);
    const [star4, setStar4] = React.useState(0);
    const [star5, setStar5] = React.useState(0);

    const total = star1 + star2 + star3 + star4 + star5;

    return (
        <div className="flex items-center" onClick={() => setRating(total)}>
            <IcStar
                className={`${
                    star1 || star2 || star3 || star4 || star5 || rating >= 1
                        ? "text-primary"
                        : ""
                } transition-all duration-300 text-2xl cursor-pointer`}
                onMouseEnter={() => setStar1(1)}
                onMouseLeave={() => setStar1(0)}
            />
            <IcStar
                className={`${
                    star2 || star3 || star4 || star5 || rating >= 2
                        ? "text-primary"
                        : ""
                } transition-all duration-300 text-2xl cursor-pointer`}
                onMouseEnter={() => {
                    setStar2(2);
                }}
                onMouseLeave={() => {
                    setStar2(0);
                }}
            />
            <IcStar
                className={`${
                    star3 || star4 || star5 || rating >= 3 ? "text-primary" : ""
                } transition-all duration-300 text-2xl cursor-pointer`}
                onMouseEnter={() => {
                    setStar3(3);
                }}
                onMouseLeave={() => {
                    setStar3(0);
                }}
            />
            <IcStar
                className={`${
                    star4 || star5 || rating >= 4 ? "text-primary" : ""
                } transition-all duration-300 text-2xl cursor-pointer`}
                onMouseEnter={() => {
                    setStar4(4);
                }}
                onMouseLeave={() => {
                    setStar4(0);
                }}
            />
            <IcStar
                className={`${
                    star5 || rating >= 5 ? "text-primary" : ""
                } transition-all duration-300 text-2xl cursor-pointer`}
                onMouseEnter={() => {
                    setStar5(5);
                }}
                onMouseLeave={() => {
                    setStar5(0);
                }}
            />
            <div className="text-xl text-primary mx-2">({total || rating})</div>
        </div>
    );
};

export default Rating;
