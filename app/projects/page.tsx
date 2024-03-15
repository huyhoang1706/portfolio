import Project from "@/components/Project";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
    return (
        <main className="bg-black">
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
        </main>
    );
};

export default Projects;
