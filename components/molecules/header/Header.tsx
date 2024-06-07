import { DefaultText } from "@/components/atoms/text/DefaultText";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

const menus = [{ title: "About", target: "/home" }];

function Header() {
  const renderMenus = () => {
    return menus.map(({ title, target }) => (
      <Link
        key={title}
        className="text-black hover:line-through hover:text-blue transition-all duration-300 ease-in-out cursor-pointer"
        href={target}
      >
        {title}
      </Link>
    ));
  };

  return (
    <div className=" border-t-2 border-blue h-16 bg-white justify-self-center self-end w-full flex justify-between items-center px-32">
      <DefaultText className="text-2xl text-black">
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
