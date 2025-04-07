import { FiChevronRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "./Modal";
import MovieDetails from "./MovieDetails";

export default function MovieCard({ movie, onDelete, onEdit }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function toggleDetailsModal() {
    setIsClicked(true); // Set to true when clicked
    setShowDetailsModal(!showDetailsModal); // Toggle modal
    setTimeout(() => setIsClicked(false), 300); // Reset after 0.3s
  }

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="card-image" />
      <div className="card-content">
        <div className="title-container">
          <FiChevronRight
            className={`arrow-icon ${isClicked ? "clicked" : ""}`}
            onClick={toggleDetailsModal}
          />
          <h3>{movie.title}</h3>
        </div>
        <p>{movie.year}</p>
        <p
          className={`watched-status ${
            movie.watched ? "watched" : "not-watched"
          }`}>
          {movie.watched ? "Watched" : "Not Watched"}
        </p>
        <div className="action-buttons">
          <button className="edit-button" onClick={() => onEdit(movie)}>
            <FontAwesomeIcon icon={faPenSquare} />
          </button>
          <button className="delete-button" onClick={() => onDelete(movie.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {showDetailsModal && (
        <Modal onClose={toggleDetailsModal}>
          <MovieDetails movie={movie} />
        </Modal>
      )}
    </div>
  );
}
