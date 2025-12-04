import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

function Introduction() {
  return (
    <div className="grid lg:grid-cols-2 pb-12 grid-cols-1 ">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl  text-cyan my-4 border-b-2">Experience</h2>
        <div className="border border-darkOrange p-4 rounded-4xl ">
          <p className="mt-4 text-grey max-w-2xl text-xl mx-auto">
            As a passionate fresher, I've gained hands-on experience by working
            on multiple real-world projects. These projects helped me strengthen
            my problem-solving skills and develop scalable web applications.
          </p>
        </div>
      </motion.div>

      {/* Part 3: Visual/Image */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mt-16  flex justify-center "
      >
        <img
          src="experience-image.png"
          alt="Experience illustration"
          className="max-w-md w-full h-auto "
        />
      </motion.div>
    </div>
  );
}

export default Introduction;
