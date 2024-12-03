import { FC } from "react";
import { ROUTES_PATH } from "../../routes/routes.constant";
import { MovieEntity } from "../../services/Movie/Movie.interface";
import { ALink } from "../Link/Link";

export const MovieItem: FC<{ value: MovieEntity }> = ({ value }) => {
 return (
  <ALink
   className="flex flex-col gap-1 "
   to={ROUTES_PATH.DETAIL}
   routeParams={{ id: value.id }}
  >
   <img
    src={value.avatar}
    alt={value.name}
    className="h-[220px]  w-full object-cover hover:scale-105 transition-all duration-500"
   />
   <span
    className="text-white textuppcase font-semibold truncate
   "
   >
    {value.name}
   </span>
  </ALink>
 );
};
