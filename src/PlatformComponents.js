//
// PlatformDropdown.js
import React from "react";
import Dropdown from "./GenericDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function PlatformDropdown({ platforms }) {
  return (
    <Dropdown
      isOpen={true} // Control if the dropdown is open or closed as needed
      toggleDropdown={() => {}} // Add toggle logic if needed
      items={platforms}
      renderHeader={() => (
        <div className="dropdown-title">
          <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
          <h4>Platform List</h4>
        </div>
      )}
      renderButtonText={() => "Platform"}
      renderItem={(platform) => (
        <div key={platform.id} className="platform-item-card">
          <div className="platform-card-header">
            <span className="platform-icon">{platform.icon}</span>
            <h5>{platform.name}</h5>
          </div>
          <div className="platform-card-body">
            <p>Movies available: {platform.moviesCount}</p>
          </div>
        </div>
      )}
      selectedItemId={null} // No selected item for platforms
      onItemClick={() => {}} // No click handler needed for platforms
    />
  );
}
