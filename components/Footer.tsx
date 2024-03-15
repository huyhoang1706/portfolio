import "@/public/insta.svg";
import "@/public/linkin.svg";
import "@/public/mail.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col gap-5 w-screen h-full px-10 bg-black text-white mx-auto">
            <h1 className="font-notoSans font-extrabold text-2xl py-5 mt-20">
                Contact
            </h1>
            <p className="font-inter font-normal text-sm mb-5">
                I'm currently looking to join a cross-functional team that
                values improving people's lives through useful application. or
                have a project in mind? Let's connect.
            </p>
            <p className="font-inter font-normal text-sm">
                hoangmhhe181370@fpt.edu.vn
            </p>
            <div className="flex items-center">
                <div className="flex mx-auto gap-6 ">
                    <Image
                        src="/insta.svg"
                        alt="insta"
                        width="48"
                        height="48"
                    />
                    <Image
                        src="/linkin.svg"
                        alt="linkin"
                        width="48"
                        height="48"
                    />
                    <Image src="/mail.svg" alt="mail" width="48" height="48" />
                </div>
            </div>
            <h1 className="text-center font-notoSans">Hoang</h1>
        </div>
    );
};

export default Footer;
