


// src/components/TextareaField.js
import React from 'react';

function TextareaField({ id, label, onChange, onLabelChange }) {
  return (
    <div className="flex flex-col my-2 w-full border rounded px-5 py-4  bg-white">
      <input
        className="bg-transparent"
        type="text"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        placeholder="Label"
        style={{ marginBottom: "5px" }}
      />
      <textarea
        className="rounded-md bg-transparent border border-gray-200"
        placeholder="Enter text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextareaField;

