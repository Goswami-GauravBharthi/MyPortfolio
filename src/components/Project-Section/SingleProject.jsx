import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

function SingleProject({project,index}) {
  return (
    // project div
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      key={index}
      className={`flex flex-col-reverse md:flex-row items-center  ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      } gap-10`}
    >
      {/* //image */}
      <div className="md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover rounded-xl shadow-lg  hover:border-2 hover:border-cyan transition-all duration-500 "
        />
      </div>
      {/* description */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl capitalize font-semibold text-orange mb-4">
          {project.title}
        </h3>
        <p className="text-white text-xl mb-6">{project.description}</p>
        <button className="px-4 py-2 rounded-full text-xl font-bold text-yellow-900 border-cyan border bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:border-orange transition-all duration-500 hover:shadow-cyanShadow">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {" "}
            View Project
          </a>
        </button>
      </div>
    </motion.div>
  );
}

export default SingleProject