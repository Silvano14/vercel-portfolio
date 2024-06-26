"use client";

import HeroTitle from "@/components/atoms/HeroTitle/HeroTitle";
import DefaultIconButton from "@/components/atoms/button/DefaultIconButton";
import Header from "@/components/molecules/header/Header";
import Work from "@/components/molecules/work/Work";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const spring = {
  type: "spring",
  damping: 40,
  stiffness: 100,
  duration: 5,
  repeat: Infinity,
};

export default function Hero() {
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (myRef?.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <div className="h-[calc(100vh-64px)] -z-1 relative bg-contain bg-center grid bg-[url('/desk.jpg')] bg-no-repeat ">
        <HeroTitle />

        <motion.div
          transition={spring}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          className="justify-self-center self-end"
        >
          <DefaultIconButton onClick={executeScroll}>
            <IconChevronDown className="size-96" color="white" />
          </DefaultIconButton>
        </motion.div>
      </div>
      <Header></Header>
      <div ref={myRef}>
        <Work />
      </div>
    </main>
  );
}
