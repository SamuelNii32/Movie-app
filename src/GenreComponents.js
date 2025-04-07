// GenreDropdown.js
import React, { useState } from "react";
import Dropdown from "./GenericDropdown";
import { FaBars } from "react-icons/fa";

export default function GenreDropdown({ genres, selectedGenre, onGenreClick }) {
  const [showGenreList, setShowGenreList] = useState(false);

  const toggleGenreList = () => setShowGenreList(!showGenreList);

  return (
    <Dropdown
      isOpen={showGenreList}
      toggleDropdown={toggleGenreList}
      items={genres}
      renderHeader={() => (
        <div className="dropdown-title">
          <FaBars className="menu-icon" />
          <h4>Genre List</h4>
        </div>
      )}
      renderButtonText={() => "Genre"}
      renderItem={(genre, onClick, selectedItemId) => (
        <div
          key={genre.id}
          className={`genre-item ${
            selectedItemId === genre.id ? "selected" : ""
          }`}
          onClick={() => onClick(genre.id)}>
          <span>{genre.name}</span> <span>{genre.emoji}</span>
        </div>
      )}
      selectedItemId={selectedGenre}
      onItemClick={onGenreClick}
    />
  );
}
