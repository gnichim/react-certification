import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import useLocalStorage from "./useLocalStorage";

const LocalStorageSetter = () => {
  const [input, setInput] = useState("");
  const [, setValue] = useLocalStorage("exampleKey", "");

  const handleSet = () => {
    setValue(input);
  };

  return (
    <div className="p-3">
      <h4>Set Local Storage Value</h4>
      <Form>
        <Form.Group
          as={Row}
          controlId="formBasicInput"
          className="align-items-center"
        >
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter value"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleSet}>
              Set Value
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LocalStorageSetter;
