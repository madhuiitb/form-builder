import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, title }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCreate = () => {
    navigate(`/forms?value=${encodeURIComponent(inputValue)}`);
    setInputValue(""); 
    onClose(); 
  };

  const handleCancel = () => {
    setInputValue(""); 
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter value"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
