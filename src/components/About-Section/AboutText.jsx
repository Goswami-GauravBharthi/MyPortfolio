import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";
import { Link } from "react-scroll";

function AboutText() {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center"
    >
      <h2 className="text-5xl text-cyan mb-10">About Me</h2>
      <p className="text-white tracking-[1px] text-xl">
        I'm Goswami Gaurav, a passionate MERN stack developer with a BCA degree.
        I specialize in building modern, responsive web applications using
        MongoDB, Express.js, React, and Node.js. I love turning ideas into
        interactive digital experiences and continuously improving my skills to
        deliver high-quality solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center  text-white hover:text-cyan ">
        <Link to={"projects"}> My Project</Link>
      </button>
    </motion.div>
  );
}

export default AboutText;
