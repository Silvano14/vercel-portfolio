import Link from "next/link";
import { DefaultText } from "./DefaultText";

const menus = ["Home", "About", "Work", "Contacts"];

function Header() {
  const renderMenu = () => {
    return menus.map((menu) => (
      <DefaultText key={menu} className="text-lg color-white flex gap-4">
        <Link href={`/${menu}`}>{menu}</Link>
      </DefaultText>
    ));
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">{renderMenu()}</div>
    </div>
  );
}

export default Header;
