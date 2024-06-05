import Link from "next/link";
import Text from "./Text";

const menus = ["Home", "About", "Work", "Contacts"];

function Header() {
  const renderMenu = () => {
    return menus.map((menu) => (
      <Text key={menu} className="text-lg color-white flex gap-4">
        <Link href={`/${menu}`}>{menu}</Link>
      </Text>
    ));
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex">{renderMenu()}</div>
      <h1 className="font-Inconsolata text-5xl">Welcome</h1>
    </div>
  );
}

export default Header;
