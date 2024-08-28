import { useState } from "react";

const StarRating = ({ id, label, onChange, onLabelChange }) => {
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
      <div className="flex border gap-x-6 px-8 border-gray-300 gap-x-1 rounded-md bg-white">
        {numbers.map((number) => (
          <label className="cursor-pointer  hover:bg-gray-200" key={number}>
            <span onClick={() => handleClick(number)} />★
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
