import { useState } from "react";
import MovieDetail from "/src/data/movieDetailData.json";

export default function DetailPage() {
  const [details] = useState(MovieDetail);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  console.log(details);
  return (
    <div className="flex-col w-[80vw] m-auto  h-full">
      <h1 className="text-center">영화 상세 페이지</h1>
      <div className="flex p-10">
        <img src={`${baseUrl}${details.poster_path}`} alt={details.title} />
        <div className="flex flex-col h-screen justify-between">
          <div className="flex gap-10">
            <h1>{details.title}</h1>
            <h1>{details.vote_average}</h1>
          </div>
          <div>{details.genres.map((genre) => genre.name).join(",")}</div>
          <div>{details.overview}</div>
        </div>
      </div>
    </div>
  );
}
