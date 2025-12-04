import React from "react";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

const projects = [
  {
    title: "Tavel guide website",
    description:
      "Discover the history, culture. and beauty beauty of every nation. Short search, and filter through countries to find the details you need.",
    image: "p1.png",
    link: "https://worldatlasg.netlify.app/",
  },
  {
    title: "E-Commerce ",
    description:
      "E commerce website design in react js and use redux tool kit for state management , Feature like buy product and also filter by various category and color.",
    image: "p2.png",
    link: "https://gauravstore.netlify.app/",
  },
  {
    title: "Educity",
    description:
      "A Make UI of an University using React js , that give information to people, helping easy find best education..  ",
    image: "p3.png",
    link: "https://educitysite.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16  px-4" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal text-cyan">Featured Projects</h2>
          <p className="text-white mt-4 text-lg">
            Hand-picked projects that highlight my skills in design,
            development, and user experience.
          </p>
        </motion.div>

        <div
         
          className="flex flex-col gap-20"
        >
          {projects.map((project, index) => (
            <SingleProject project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
