import React from "react";
import useLocalStorage from "./useLocalStorage";

const LocalStorageDisplay = () => {
  const [value] = useLocalStorage("exampleKey", "");

  return (
    <div>
      <h4>Display Local Storage Value</h4>
      <p>Stored Value: {value}</p>
    </div>
  );
};

export default LocalStorageDisplay;
