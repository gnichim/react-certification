import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import LocalStorageExample from "./components/examples/LocalStorageExample";
import DialogExample from "./components/examples/DialogExample";
import AutoFilterDropdownExample from "./components/examples/AutoFilterDropdownExample";

const App = () => {
  return (
    <div className="d-flex vh-100">
      <Container className="my-auto">
        <h1 className="mb-5">React Level 3 Certification Exam</h1>
        <div className="mb-4">
          <LocalStorageExample />
        </div>
        <div className="mb-4">
          <DialogExample />
        </div>
        <div>
          <AutoFilterDropdownExample />
        </div>
      </Container>
    </div>
  );
};

export default App;
