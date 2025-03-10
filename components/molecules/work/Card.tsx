import { useIsMobile } from "@/hooks/usIsMobile";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const textMotion = {
  rest: {
    y: 150,
    opacity: 0,
    height: 0,
    display: "none",
    transition: {
      duration: 0.3,
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
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const titleMotion = {
  rest: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export type CardProps = {
  title: string;
  description: string;
  href: string;
};

export const Card: FC<CardProps> = ({ title, description, href }) => {
  const [isTapped, setIsTapped] = useState(false);
  const isMobile = useIsMobile();

  const [descriptionRef, animate] = useAnimate();

  useEffect(() => {
    if (isMobile)
      if (isTapped) {
        animate("div", textMotion.hover);
      } else {
        animate("div", textMotion.rest);
      }
  });

  return (
    <motion.div
      onTap={() => setIsTapped((prev) => !prev)}
      initial="rest"
      whileHover="hover"
      animate={isTapped ? "hover" : "rest"}
      className="hover:border-sky-400 text-sky-400 bg-black border-2 cursor-pointer relative font-Inconsolata items-center rounded-sm h-fit min-h-40 min-w-40 w-full flex flex-col"
    >
      <motion.div
        variants={titleMotion}
        className="flex text-2xl items-center justify-center h-40"
      >
        <h1>{title}</h1>
      </motion.div>
      <motion.div
        ref={descriptionRef}
        className="justify-between top-0 absolute text-lg text-justify flex p-4 w-full text-bold h-full"
        variants={textMotion}
      >
        {isMobile ? (
          <div className="h-full items-center bg-pink-400 flex flex-col justify-between">
            <h2 className="text-sm">{description}</h2>
            <div className="w-full h-fit text-md justify-center bg-green-400 flex items-center font-bold line-through">
              {title}
            </div>
          </div>
        ) : (
          <Link
            target="_blank"
            href={href}
            className="h-full flex flex-col justify-between"
          >
            <h2 className="">{description}</h2>
            <div className="justify-center flex items-center font-bold text-4xl line-through">
              {title}
            </div>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};
