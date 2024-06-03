import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDialog } from "./DialgoContext";

const Dialog = ({ header, body, footer, modal = true }) => {
  const { isOpen, closeDialog } = useDialog();

  return (
    <Modal
      show={isOpen}
      onHide={closeDialog}
      backdrop={modal ? "static" : true}
      keyboard={!modal}
    >
      <Modal.Header closeButton>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer || (
          <Button variant="secondary" onClick={closeDialog}>
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
