import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

function Project({ projects }) {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="grid gap-8  md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className=" border-dotted border-2 border-orange rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold text-cyan">{project.title}</h3>
          <p className="text-white text-xl mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-darkCyan animate-pulse text-gray-900 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Project;
