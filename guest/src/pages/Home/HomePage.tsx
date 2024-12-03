import { MovieItem } from "../../components/Movie/MovieItem";

export const HomePage = () => {
 return (
  <div className="grid grid-cols-6 gap-x-1 gap-y-4 rounded overflow-hidden ">
   {new Array(50)
    .fill({
     avatar: "https://www.nbyy.cc/imgs1/330620778.jpg",
     id: 1,
     name: "破·地狱",
    })
    .map((movie, idx) => (
     <MovieItem value={movie} key={idx} />
    ))}
  </div>
 );
};
