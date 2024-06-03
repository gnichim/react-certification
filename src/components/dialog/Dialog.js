import React, { useEffect } from "react";
import "./Dialog.css";
import { useDialog } from "./DialgoContext";

const Dialog = ({ header, body, footer, modal = true }) => {
  const { isOpen, closeDialog } = useDialog();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !modal) {
        closeDialog();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, modal, closeDialog]);

  const handleOutsideClick = (event) => {
    if (!modal && event.target.className === "modal") {
      closeDialog();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal"
      style={{ display: isOpen ? "block" : "none" }}
      onClick={handleOutsideClick}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeDialog}>
            &times;
          </span>
          {header}
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">
          {footer || <button onClick={closeDialog}>Close</button>}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
