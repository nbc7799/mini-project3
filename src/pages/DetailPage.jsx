import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const imgURL = import.meta.env.VITE_TMDB_IMG_URL;
const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    //async는 함수프로미스를 반환, 그리고 await사용하겠다
    const fetchMovie = async () => {
      //try는 에러가 날수도있는 아래코드를 try블록 안에 넣어 catch에서 에러잡을수있게
      try {
        //axios.get()영화정보를 get으로 요청 await사용했으므로 비동기로 받아오겠다.
        const res = await axios.get(
          `${baseUrl}/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("영화 API 응답:", res.data);
        setMovie(res.data);
      } catch (err) {
        console.error("API 호출 실패:", err);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className="flex-col w-[80vw] m-auto  h-full">
      <h1 className="text-center">영화 상세 페이지</h1>
      {movie && (
        <div className="flex p-10">
          <img src={`${imgURL}${movie.poster_path}`} alt={movie.title} />
          <div className="flex flex-col h-screen justify-between">
            <div className="flex gap-10">
              <h1>{movie.title}</h1>
              <h1>{movie.vote_average}</h1>
            </div>
            <div>{movie.genres.map((genre) => genre.name).join(",")}</div>
            <div>{movie.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
}
