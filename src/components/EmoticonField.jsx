// src/components/EmoticonField.js
import React, { useState } from "react";

function EmoticonField({ id, label, onChange, onLabelChange }) {
  const [selectedEmoticon, setSelectedEmoticon] = useState(null);
  const emoticons = ["😊", "😂", "😍", "😢", "😎"];

  const handleClick = (emoticon) => {
    setSelectedEmoticon(emoticon);
    onChange(emoticon);
  };

  return (
    <div className="flex flex-col my-2 w-full border rounded px-5 py-4  bg-white">
      <input
        className="bg-transparent"
        type="text"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        placeholder="Label"
      />
      <div className="flex border border-gray-300 gap-x-8 rounded-md bg-white">
        {emoticons.map((emoticon, index) => (
          <span
            className="border-r p-3 cursor-pointer  hover:bg-gray-200"
            key={index}
            onClick={() => handleClick(emoticon)}
          >
            {emoticon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EmoticonField;
