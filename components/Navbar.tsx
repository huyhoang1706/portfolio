"use client";

import Link from "next/link";
import "@/public/menu.svg";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
];

const Navbar = () => {
    return (
        <nav className="flex flex-row w-full h-28 border-b-[1.5px] border-[#808791] items-center bg-black px-6 sm:px-7 md:px-8 font-notoSans select-none">
            <h1 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                MHH
            </h1>
            <div
                className="flex flex-row justify-center gap-20 absolute -top-10 align-middle text-[#808791] left-1/3 w-1/3
                    md:top-10 md:text-xl lg:text-2xl lg:gap-32"
            >
                {links.map((link) => (
                    <Link
                        href={link.url}
                        key={link.title}
                        className="hover:text-white transition duration-100"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
            <button className="absolute top-8 right-8 w-12 h-12 rounded-xl md:hidden">
                <img src="menu.svg" alt="menu" />
            </button>
        </nav>
    );
};

export default Navbar;
