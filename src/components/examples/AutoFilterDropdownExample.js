import React, { useState, useEffect } from "react";
import AutoFilterDropdown from "../autoFilterDropdown/AutoFilterDropdown";

const AutoFilterDropdownExample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleValueChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <h2>Auto-Filter Dropdown Example</h2>
      <AutoFilterDropdown
        data={users}
        labelProp="name"
        onValueChange={handleValueChange}
      />
    </div>
  );
};

export default AutoFilterDropdownExample;
