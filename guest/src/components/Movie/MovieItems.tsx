import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router";
import { ROUTES_PATH } from "../../routes/routes.constant";
import { MovieItem } from "./MovieItem";

export const MovieItems: FC<{ categoryId: string; categoryName: string }> = ({
 categoryId,
 categoryName,
}) => {
 return (
  <div className="flex flex-col gap-4">
   <Link
    to={`${ROUTES_PATH.CATEGORY}/${categoryId}`}
    className="text-white flex items-end hover:text-primary"
   >
    <span className="text-2xl  font-bold mr-4">{categoryName}</span>
    <div className="flex items-center gap-1">
     <span>更多</span>
     <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
    </div>
   </Link>
   <div className="grid grid-cols-6 gap-x-1 gap-y-4 rounded overflow-hidden ">
    {new Array(18)
     .fill({
      avatar: "https://www.nbyy.cc/imgs1/330620778.jpg",
      id: 1,
      name: "破·地狱",
     })
     .map((movie, idx) => (
      <MovieItem value={movie} key={idx} />
     ))}
   </div>
  </div>
 );
};
