import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { MENUS } from "./menus";

export const Header: React.FC<{}> = (props) => {
 return (
  <div className="flex items-center w-full mb-6 py-4">
   <div className="flex items-center gap-1 ">
    <img
     src="https://www.nbyy.cc/static/mudvod/common/128-128-logo.png"
     alt="Logo"
     className="h-9"
    />
   </div>
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
 );
};
