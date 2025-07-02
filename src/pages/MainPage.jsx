import { useEffect, useState } from "react";
import MovieCardList from "../components/MovieCardList";
import axios from "axios";

const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const imgURL = import.meta.env.VITE_TMDB_IMG_URL;
const token = import.meta.env.VITE_TMDB_READ_TOKEN;

export default function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/movie/popular?language=ko-KOR&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMovies(res.data.results);
      } catch (err) {
        console.error("API 호출 실패:", err);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div>
      <MovieCardList movies={movies} imgURL={imgURL} />
    </div>
  );
}
