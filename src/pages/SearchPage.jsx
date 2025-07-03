import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const imgURL = import.meta.env.VITE_TMDB_IMG_URL;
const token = import.meta.env.VITE_TMDB_READ_TOKEN;

export default function SearchPage() {
  const [searchParams] = useSearchParams(); // url에서 쿼리 파라미터 읽어오기
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/search/movie?query=${query}&include_adult=false&language=ko-KR`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMovies(res.data.results);
      } catch (err) {
        console.error("api 호출 실패:", err);
      }
    };
    fetchMovie();
  }, [query]);

  if (!query) return <div>검색어를 입력해주세요...</div>;

  return (
    <div className="grid grid-cols-5 gap-10">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} imgURL={imgURL} />
      ))}
    </div>
  );
}
