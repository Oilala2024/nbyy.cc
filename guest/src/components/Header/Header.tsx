import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useScroll } from "../../hooks/useScroll";
import { clsx } from "../../utils/class.util";
import { MENUS } from "./menus";

export const Header = () => {
 const scrollY = useScroll();
 const [isFixed, setIsFixed] = useState<boolean>(false);
 useEffect(() => {
  setIsFixed(scrollY > 0);
 }, [scrollY]);
 return (
  <div className={clsx("w-full fixed top-0  z-[999]")}>
   <div
    className={clsx(
     "container mx-auto max-w-6xl px-4  py-4  flex items-center w-full",
     isFixed ? " backdrop-blur bg-[#191a20]/60" : ""
    )}
   >
    <img
     src="https://www.nbyy.cc/static/mudvod/common/128-128-logo.png"
     alt="Logo"
     className="h-9"
    />
    <div className="flex items-center gap-6 ml-10">
     {MENUS.map((menu, idx) => (
      <Link to={menu.url} className="text-white hover:text-primary" key={idx}>
       {menu.name}
      </Link>
     ))}
    </div>
    <div className="rounded px-3 py-2 bg-[#424348] w-[250px] flex gap-4 ml-6">
     <input
      className="border-none bg-transparent flex-1 w-full text-sm text-white placeholder:text-neutral-300"
      placeholder="斗破苍穹"
     />
     <div className="h-full w-[1px] bg-[#5a5b5f]"></div>
     <div className="flex items-center gap-1 text-primary text-sm">
      <FontAwesomeIcon icon={faSearch} />
      <span>搜索</span>
     </div>
    </div>
   </div>
  </div>
 );
};
