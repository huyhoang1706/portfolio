import "@/public/BG.jpg";
import Project from "@/components/Project";
import Exp from "@/components/Exp";
import "@/public/rustLogo.svg";
import "@/public/mongoDb.svg";

export default function Home() {
    return (
        <main className="bg-black">
            <section>
                <div className="relative w-screen h-100 overflow-hidden">
                    <img
                        src="BG.jpg"
                        alt="BG"
                        className="object-cover w-full h-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-notoSans">
                        <h2 className="text-xs sm:text-sm md:text-md lg:text-xl font-bold">
                            Software Developer
                        </h2>
                        <h1 className="text-sm sm:text-md md:text-lg lg:text-2xl font-extrabold">
                            Hello, My name is Hoang
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-center text-4xl text-white p-5 font-notoSans font-extrabold">
                    Projects
                </h1>
                <div className="grid grid-cols-1 mt-5 w-4/5 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                    <Project Name="Project #1" desc="Description #1" />
                    <Project Name="Project #2" desc="Description #2" />
                    <Project Name="Project #3" desc="Description #3" />
                    <Project Name="Project #4" desc="Description #4" />
                    <Project Name="Project #5" desc="Description #5" />
                    <Project Name="Project #6" desc="Description #6" />
                </div>
            </section>
            <section className="mt-20 text-white">
                <h1 className="text-center text-4xl p-5 font-notoSans font-extrabold">
                    Experience
                </h1>
                <p className="text-center mb-20">
                    I'm experience in quite a lot of technologies
                </p>
                <section className="w-full px-20">
                    <div className="flex flex-wrap gap-10 w-fit mx-auto items-center justify-center">
                        <Exp imgURL="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" />
                        <Exp imgURL="rustLogo.svg" />
                        <Exp imgURL="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" />
                        <Exp imgURL="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
                        <Exp imgURL="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <Exp imgURL="mongoDb.svg" />
                        <Exp imgURL="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
                    </div>
                </section>
            </section>
        </main>
    );
}
