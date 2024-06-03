import React, { useState, useEffect } from "react";
import "./AutoFilterDropdown.css";

const AutoFilterDropdown = ({ data, labelProp, onValueChange }) => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setFilter(value[labelProp]);
    onValueChange(value);
    setIsOpen(false);
  };

  const filteredData = data.filter((item) =>
    item[labelProp].toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    console.log("Filtered data: ", filteredData);
  }, [filter, data, filteredData]);

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setIsOpen(true);
        }}
        placeholder="Type to filter"
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && filteredData.length > 0 && (
        <ul className="dropdown-menu">
          {filteredData.map((item) => (
            <li
              key={item.id} // Unique key for each item.
              onClick={() => handleSelect(item)}
              className="dropdown-item"
            >
              {item[labelProp]
                .split(new RegExp(`(${filter})`, "gi"))
                .map((part, index) =>
                  part.toLowerCase() === filter.toLowerCase() ? (
                    <b key={index}>{part}</b>
                  ) : (
                    part
                  )
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
