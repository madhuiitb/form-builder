import {useState} from "react";

function NumericField({ id, label, onChange, onLabelChange }) {
 const [rating, setRating] = useState(null);
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  const handleClick = (number) => {
    setRating(number);
    onChange(number);
  };

  

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

      <div className="flex border border-gray-300 gap-x-1 rounded-md bg-white">
        {numbers.map((number, index) => (
          <span
            className="border-r p-3 cursor-pointer hover:bg-gray-200"
            key={index}
            onClick={() => handleClick(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NumericField;
