import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <div className="modal open">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        {children}
      </div>
    </div>
  );
}
