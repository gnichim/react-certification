import React from "react";
import LocalStorageSetter from "../localStorageHandler/LocalStorageSetter";
import LocalStorageDisplay from "../localStorageHandler/LocalStorageDisplay";

const Example = () => {
  return (
    <>
      <h2>LocalStorage Handler Example</h2>
      <LocalStorageSetter />
      <LocalStorageDisplay />
    </>
  );
};

export default Example;
