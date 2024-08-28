// src/components/TextField.js
import React from "react";

function TextField({
  id,
  label,
  onChange,
  onLabelChange }) {
  return (
    <div className="flex flex-col my-2 w-full border rounded px-5 py-4  bg-white">
      <input
        className="bg-transparent border-red-100"
        type="text"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        placeholder="Label"
      />
      <input
        className="rounded-md bg-transparent border border-gray-200"
        type="text"
        placeholder="Enter text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextField;
