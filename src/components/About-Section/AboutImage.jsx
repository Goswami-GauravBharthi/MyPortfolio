import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";

function AboutImage() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-[300px] h-[500px] relative   "
    >
      <div className="w-[300px] h-[500px] overflow-hidden absolute rounded-[100px] ">
        <img
          src="about-me.jpg"
          alt="about me image"
          className="h-full w-auto rounded-3xl object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
}

export default AboutImage;
