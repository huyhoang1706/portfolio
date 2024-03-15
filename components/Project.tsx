import React from "react";

type Props = {
    Name: string;
    desc: string;
};

const Project = (props: Props) => {
    return (
        <div className="relative h-[320px] transition transform hover:scale-110 duration-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#cb5f35] to-purple-600 rounded-xl blur"></div>
            <button className="relative flex flex-col bg-neutral-900 rounded-lg w-full h-full justify-center items-center">
                <span className="text-white text-2xl font-bold">
                    {props.Name}
                </span>
                <span className="text-white">{props.desc}</span>
            </button>
        </div>
    );
};

export default Project;
