import { genres } from "./App";

export default function MovieDetails({ movie }) {
  if (!movie) return null;

  const genre = genres.find((genre) => genre.id === movie.genreId);
  const { title, year, description, rating, watched } = movie;

  return (
    <>
      <div className="movie-details-modal-header">
        <h2 className="details-title">{title}</h2>
      </div>
      <div className="movie-details-modal-body">
        <div className="movie-details-modal-info">
          <div className="info-item">
            <strong>Status:</strong>
            <span>{watched ? "watched" : "not watched"}</span>
          </div>
          <div className="info-item">
            <strong>Release year:</strong>
            <span>{year}</span>
          </div>
          <div className="info-item">
            <strong>Description:</strong>
            <span>{description}</span>
          </div>
          <div className="info-item">
            <strong>Rating:</strong>
            <span>{rating}</span>
          </div>
          <div className="info-item">
            <strong>Genre:</strong>
            <span>{genre ? genre.name : "Unknown"}</span>
          </div>
        </div>
      </div>
    </>
  );
}
