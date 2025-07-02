import { useNavigate } from "react-router-dom";

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  movie,
  imgURL,
}) {
  const navigate = useNavigate();
  return (
    <div className="w-300px border-e-orange-900 text-xl">
      <img
        src={`${imgURL}${poster_path}`}
        onClick={(e) => {
          console.log(e.target);
          navigate(`/movies/${movie.id}`);
        }}
      />
      <div>{title}</div>
      <div>{vote_average}</div>
    </div>
  );
}
