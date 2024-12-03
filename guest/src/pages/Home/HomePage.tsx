import { MovieItems } from "../../components/Movie/MovieItems";

export const HomePage = () => {
 return (
  <div className="flex flex-col gap-12">
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
   <MovieItems categoryId="电影" categoryName="电影" />
  </div>
 );
};
