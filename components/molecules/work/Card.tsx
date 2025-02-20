import { motion } from "framer-motion";
import { FC } from "react";

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
    opacity: 0.5,
    height: 160,
    display: "block",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
};

type Props = {
  title: string;
  description: string;
};

export const Card: FC<Props> = ({ title, description }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="border-blue-700 border-2 cursor-pointer relative font-Inconsolata items-center rounded-sm bg-gray-600 h-fit min-h-40 min-w-40 w-full"
    >
      <div className="flex text-2xl text-blue-900 items-center justify-center h-40">
        <h1>{title}</h1>
      </div>
      <motion.h2
        className="top-0 absolute text-lg text-justify flex p-4 w-full text-bold text-white h-full rounded-sm "
        variants={textMotion}
      >
        {description}
      </motion.h2>
    </motion.div>
  );
};
