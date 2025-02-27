"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

function HeroTitle() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("h1", { opacity: 1 });
    animate("h2", { opacity: 1 });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        animate("h1", { opacity: 0, display: "none" });
        animate("h2", { opacity: 0, display: "none" });
      } else if (window.scrollY < 400) {
        animate("h1", { opacity: 1, display: "block" });
        animate("h2", { opacity: 1, display: "block" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <div
      ref={scope}
      className="z-0 flex items-center justify-center flex-col fixed gap-4 w-full h-full"
    >
      <h1
        className={
          "text-sky-400 font-DMSerifDisplay text-7xl sm:text-9xl text-center"
        }
      >
        Silvano
      </h1>
      <h2
        className={
          " uppercase font-DMSerifDisplay text-4xl text-center text-sky-400 line-through"
        }
      >
        Portfolio
      </h2>
    </div>
  );
}

export default HeroTitle;
