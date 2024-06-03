import React from "react";
import { DialogProvider, useDialog } from "../dialog/DialgoContext";
import Dialog from "../dialog/Dialog";

const OpenDialogButton = () => {
  const { openDialog } = useDialog();

  return <button onClick={openDialog}>Open Dialog</button>;
};

const DialogExample = () => {
  return (
    <DialogProvider>
      <div className="p-3">
        <h2>Dialog Example</h2>
        <OpenDialogButton />
        <Dialog
          header={<h2>Dialog Header</h2>}
          body={<p>This is the body content of the dialog.</p>}
          footer={
            <button onClick={() => alert("Footer Button Clicked")}>
              Footer Button
            </button>
          }
          modal={false}
        />
      </div>
    </DialogProvider>
  );
};

export default DialogExample;
