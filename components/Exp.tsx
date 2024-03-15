import React from "react";

type Props = {
    imgURL: string;
};

const Exp = (props: Props) => {
    return (
        <div className="relative h-40 w-40 transition transform hover:scale-110 duration-200">
            <div className="absolute -inset-0.5 bg-gradient-to-l from-cyan-700 to-orange-600 rounded-full blur"></div>
            <div className="relative flex rounded-full items-center bg-black justify-center h-full w-full">
                <img src={props.imgURL} className="w-3/4" />
            </div>
        </div>
    );
};

export default Exp;
