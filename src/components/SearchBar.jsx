import React from "react";

function SearchBar({ placeholder, onSearch }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        onChange={handleInputChange}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
