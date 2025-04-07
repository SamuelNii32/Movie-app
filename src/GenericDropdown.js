// Dropdown.js
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdFilm } from "react-icons/io";

export default function Dropdown({
  isOpen,
  toggleDropdown,
  items,
  renderHeader,
  renderButtonText,
  renderItem,
  selectedItemId,
  onItemClick,
}) {
  return (
    <div className="dropdown-card">
      <div className="dropdown-card-header">
        {renderHeader && renderHeader()}
      </div>
      <div className="dropdown-card-body">
        <div className="dropdown-button">
          <button className="dropdown-button-text" onClick={toggleDropdown}>
            <IoMdFilm className="dropdown-icon" /> {renderButtonText()}
            <FaAngleDown className="dropdown-button-icon" />
          </button>
        </div>
        {isOpen && (
          <div className="dropdown-list">
            {items.map((item) => renderItem(item, onItemClick, selectedItemId))}
          </div>
        )}
      </div>
    </div>
  );
}
