import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

function SkillsText() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="mb-5"
    >
      <h2 className="text-center text-6xl text-cyan mb-8">My Skills</h2>
      <p className="text-white text-center text-xl">
        I not only work with these technologies but excellent in using them with
        best practices to deliver high-quality results. i have been working with
        all these skill to build my projects.
      </p>
    </motion.div>
  );
}

export default SkillsText;
