import MovieCard from "./MovieCard"; // Adjust the path based on your file structure

export default function MovieList({ movies, onDelete, onEdit }) {
  return (
    <div>
      {movies.length === 0 ? (
        <div className="no-movies-container">
          <div className="no-movies-message">
            No movies found for this genre.
          </div>
        </div>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
