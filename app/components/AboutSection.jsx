"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc font-light pl-2 text-red-500">
                <li><span className="text-cyan-50 font-semibold">Programming languages:</span> Python, Javascript, Java</li>
                <li><span className="text-cyan-50 font-semibold">Frameworks:</span> ExpressJS, Flask, Django, Spring</li>
                <li><span className="text-cyan-50 font-semibold">Database:</span> MySQL, MongoDB</li>
                <li><span className="text-cyan-50 font-semibold">Others:</span> Html, Css, Git and Github, Postman, Pandas</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc font-light pl-2  text-red-500">
                <li><span className="text-cyan-50 font-semibold">University -</span> Software Developer </li>
                <li><span className="text-cyan-50 font-semibold">BootCamp</span> FullStack NodeJS</li>
                <li><span className="text-cyan-50 font-semibold">Formation</span> in Python</li>
            </ul>
        )
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc font-light pl-2  text-red-500">
                <li>Spanish</li>
                <li>English</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/guts.png"
                    alt="about image"
                    width={400}
                    height={400}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About</h2>
                    <p className="text-base md:text-lg"> I am an enthusiastic and proactive individual with a relentless drive to take on new
                        challenges and continually acquire fresh skills in order to stay at the forefront of a
                        rapidly evolving environment.
                    </p>
                    <div className="flex flex-row justify-center mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}>
                            {" "}
                            Languages{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{tabData.find((t) => t.id === tab).content}
                    </div>
                </div>

            </div>
        </section>)
};

export default AboutSection