import { useState } from "react";
import MovieList from "/src/data/movieListData.json";
import MovieCard from "./MovieCard";

export default function MovieCardList() {
  const [movies] = useState(MovieList.results);
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid grid-cols-5 gap-10 p-10 cursor-pointer">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            baseUrl={baseUrl}
            movie={movie}
          />
        );
      })}
    </div>
  );
}
