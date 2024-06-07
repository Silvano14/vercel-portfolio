import { DefaultText } from "@/components/atoms/text/DefaultText";
import { Link } from "@nextui-org/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Header() {
  return (
    <div className=" border-t-2 border-blue h-16 bg-white justify-self-center self-end w-full flex justify-between items-center px-32">
      <DefaultText className="text-2xl text-black">
        Silvano Norberti
      </DefaultText>
      <div className="flex gap-8">
        <DefaultText className="text-black">About</DefaultText>
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
