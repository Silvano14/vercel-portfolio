import { DefaultText } from "@/components/atoms/text/DefaultText";
import { Link } from "@nextui-org/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const menus = ["About"];

function Header() {
  const renderMenus = () => {
    return menus.map((menu) => (
      <DefaultText
        key={menu}
        className="text-black hover:line-through hover:text-blue transition-all duration-300 ease-in-out cursor-pointer"
      >
        {menu}
      </DefaultText>
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
