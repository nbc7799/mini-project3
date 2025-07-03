import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, imgURL }) {
  const navigate = useNavigate();
  return (
    <div className="w-300px border-e-orange-900 text-xl">
      <img
        src={`${imgURL}${movie.poster_path}`}
        onClick={(e) => {
          console.log(e.target);
          navigate(`/movies/${movie.id}`);
        }}
      />
      <div>{movie.title}</div>
      <div>{movie.vote_average}</div>
    </div>
  );
}
