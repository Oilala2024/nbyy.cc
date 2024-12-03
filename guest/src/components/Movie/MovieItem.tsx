import { FC } from "react";
import { MovieEntity } from "../../services/Movie/Movie.interface";

export const MovieItem: FC<{ value: MovieEntity }> = ({ value }) => {
 return (
  <div className="flex flex-col gap-1 ">
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
  </div>
 );
};
