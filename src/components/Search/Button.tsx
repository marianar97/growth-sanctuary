import React from "react";

export default function Button({ handleSearch }) {
  return (
    <button
      className="h-9 rounded-md border border-input bg-black px-6 text-white hover:bg-gray-800 transition-colors"
      onClick={handleSearch}
    >
      Search
    </button>
  );
}
