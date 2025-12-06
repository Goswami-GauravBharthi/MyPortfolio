import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varience";
function AllSkill() {

  const reference = useRef(null);
  const colors = [
    "html.svg",
    "css.svg",
    "js.svg",
    "react.svg",
    "node.svg",
    "mongodb.jpg",
    "tailwind.jpg",
    "pgsql.png"
  ];

  return (
    <motion.div
      ref={reference}
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full min-h-[400px] border  gap-5 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7   border-orange bg-black rounded-2xl   overflow-hidden p-8 relative mt-22"
    >
      {colors.map((img, index) => (
        <motion.div
          key={index}
          // drag
          // dragConstraints={reference}

          whileTap={{ scale: 0.95 }}
          // whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={1}
          className={`lg:w-35 lg:h-35 md:w-30 md:h-30 sm:w-20 sm:h-20  rounded-xl  overflow-hidden border shadow-skill animate-pulse  border-cyan bg-cover  bg-no-repeat cursor-grab active:cursor-grabbing  `}
        >
          <div className="h-full w-full  bg-darkCyan/10 ">
            <img src={img} alt="" />
          </div>
        </motion.div>
      ))}

      <ul className="text-orange animate-pulse duration-100 font-semibold font-special uppercase absolute px-6 bottom-0 flex gap-5 min-h-10 w-full overflow-x-scroll scrollbar-none scrollbar-hide  ">
        <li className="inline-block  ">html</li>
        <li className="inline-block  ">css</li>
        <li className="inline-block  ">tailwind</li>
        <li className="inline-block  ">Java_script</li>
        <li className="inline-block  ">Type</li>
        <li className="inline-block  ">react</li>
        <li className="inline-block  ">redux</li>
        <li className="inline-block  ">Node_js</li>
        <li className="inline-block  ">Express_js</li>
        <li className="inline-block  ">mongodb</li>
        <li className="inline-block  ">PostgreSQL</li>
        <li className="inline-block  ">Git_github</li>
      </ul>
    </motion.div>
  );
}

export default AllSkill;
