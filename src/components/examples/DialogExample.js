import React from "react";
import { DialogProvider, useDialog } from "../dialog/DialgoContext";
import Dialog from "../dialog/Dialog";
import { Button, Modal } from "react-bootstrap";

const OpenDialogButton = () => {
  const { openDialog } = useDialog();

  return (
    <Button variant="primary" onClick={openDialog}>
      Open Dialog
    </Button>
  );
};

const Example = () => {
  return (
    <DialogProvider>
      <div className="p-3">
        <h2>Dialog Example</h2>
        <OpenDialogButton />
        <Dialog
          header={<Modal.Title>Dialog Header</Modal.Title>}
          body={<p>This is the body content of the dialog.</p>}
          footer={
            <Button
              variant="primary"
              onClick={() => alert("Footer Button Clicked")}
            >
              Footer Button
            </Button>
          }
          modal={true} // Change to false to make it a non-modal dialog
        />
      </div>
    </DialogProvider>
  );
};

export default Example;
