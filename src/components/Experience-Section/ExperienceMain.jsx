import React from "react";
import Introduction from "./Introduction";
import Project from "./Project";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built a personal portfolio using React.js and Tailwind CSS to showcase my skills and projects.",
    techStack: ["React", "Tailwind CSS"],
  },
  {
    title: "E-commerce Web App",
    description:
      "Developed a full-stack e-commerce application with shopping cart, payment gateway, and admin dashboard.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    title: "Chat Application",
    description:
      "Created a real-time chat app using Socket.IO and implemented user authentication and private rooms.",
    techStack: ["React", "Socket.IO", "Firebase"],
  },
];

function ExperienceMain() {
  return (
    <section className="w-full  py-10 px-4 sm:px-6 lg:px-20" id="experience">
      <div className="max-w-[1200px] mx-auto ">
        {/* Part 1: Introduction */}
        <Introduction />

        {/* Part 2: Project Highlights */}
        <Project projects={projects} />
      </div>
    </section>
  );
}

export default ExperienceMain;
