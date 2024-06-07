"use client";

import HeroTitle from "@/components/atoms/HeroTitle/HeroTitle";
import Header from "@/components/atoms/text/Header";
import Work from "@/components/molecules/work/Work";
import { Button } from "@nextui-org/react";
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

export default function Home() {
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (myRef?.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <div className="-z-1 relative bg-fixed md:h bg-center flex min-h-screen items-center flex-col justify-between bg-[url('/desk.jpg')] bg-no-repeat bg-cover">
        <div></div>

        <HeroTitle />

        <motion.div
          transition={spring}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
        >
          <Button onClick={executeScroll} isIconOnly variant="light" size="lg">
            <IconChevronDown className="size-96" color="white" />
          </Button>
        </motion.div>
      </div>
      <div ref={myRef}>
        <Work />
      </div>
    </main>
  );
}
