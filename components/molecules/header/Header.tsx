import { DefaultText } from "@/components/atoms/text/DefaultText";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const menus = [{ title: "About", target: "/home" }];

function Header() {
  const container = useRef<HTMLDivElement>(null);
  const renderMenus = () => {
    return menus.map(({ title, target }) => (
      <Link
        key={title}
        className="text-md text-black hover:line-through hover:text-blue transition-all duration-300 ease-in-out cursor-pointer"
        href={target}
      >
        {title}
      </Link>
    ));
  };

  useEffect(() => {
    function position() {
      if (container.current) {
        console.log(window.innerHeight);
        if (window.scrollY > window.innerHeight - 64) {
          container.current.style.position = "sticky";
          container.current.style.top = "0px";
        } else {
          container.current.style.position = "static";
          container.current.style.top = "";
        }
      }
    }

    position();
    document.addEventListener("scroll", position, true);

    return () => {
      document.removeEventListener("scroll", position, true);
    };
  }, []);

  return (
    <div
      ref={container}
      className="z-10 border-t-2 border-blue h-16 bg-white justify-self-center self-end w-full flex justify-between items-center px-6 md:px-32"
    >
      <DefaultText className="text-md md:text-2xl text-black">
        Silvano Norberti
      </DefaultText>
      <div className="flex gap-8">
        {renderMenus()}
        <Link
          title="GitHub link"
          target="_blank"
          href="https://github.com/Silvano14"
        >
          <IconBrandGithub color="blue" />
        </Link>
        <Link
          title="Linkedin link"
          target="_blank"
          href="https://www.linkedin.com/in/silvano-norberti-167639158/"
        >
          <IconBrandLinkedin color="blue" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
