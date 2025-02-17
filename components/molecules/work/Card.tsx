import { motion } from "framer-motion";
import React from "react";

const textMotion = {
  rest: {
    y: 160,
    opacity: 0,
    height: 0,
    display: "none",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    y: 0,
    opacity: 1,
    height: 160,
    display: "block",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const Card = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative font-Inconsolata border-1 rounded-sm bg-yellow-400 h-fit min-h-40 min-w-40"
    >
      <motion.h1
        className="absolute w-full border-1 bg-red-400 h-full rounded-sm"
        variants={textMotion}
      >
        Hover me!
      </motion.h1>
    </motion.div>
  );
};
