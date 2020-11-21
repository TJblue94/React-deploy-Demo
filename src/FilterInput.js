import React, { useEffect, useState } from "react";

const FilterInput = ({ users, updateUsers, handleFilter }) => {
  const [inputValue, updateInput] = useState("");

  const handleChange = (e) => {
    let input = e.target.value
    updateInput(input)
    handleFilter(input)
  }

  return (
    <input value={inputValue} onChange={handleChange} />
  );
};

export default FilterInput; 