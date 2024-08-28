import { useState } from "react";

const RadioRating = ({ id, label, onChange, onLabelChange }) => {
    const [rating, setRating] = useState(null);
    const numbers = [1, 2, 3, 4, 5];

    const handleClick = (number) => {
      setRating(number);
      onChange(number);
    };

  return (
    <div className="flex flex-col my-2 w-full border rounded px-5 py-4  bg-white">
      <input
        className="bg-transparent border-red-100"
        type="text"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        placeholder="Label"
      />
      <div className="flex border border-gray-300 gap-x-1 rounded-md bg-white">
        {numbers.map((number) => (
          <label
            className="border-r py-4 px-7 cursor-pointer  hover:bg-gray-200"
            key={number}
          >
            <input
              type="radio"
              checked={number === rating}
              onChange={() => handleClick(number)}
            />
            {number}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioRating;
