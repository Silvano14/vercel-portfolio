"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { DefaultText } from "../text/DefaultText";

function HeroTitle() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("p", { opacity: 1 });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        animate("p", { opacity: 0 });
      } else if (window.scrollY < 400) {
        animate("p", { opacity: 1 });
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
      className="flex items-center inset-y-1/2 justify-center flex-col fixed gap-4"
    >
      <DefaultText className={"text-5xl"}>Silvano Norberti</DefaultText>
      <DefaultText className={"text-2xl"}>Frontend developer</DefaultText>
    </div>
  );
}

export default HeroTitle;
