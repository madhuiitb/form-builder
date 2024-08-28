// src/components/Navbar.js
// import React from "react";
import PropTypes from "prop-types";

function Navbar({ saveData, submitData }) {

  return (
    <div className=" flex items-center justify-between min-w-[700px] border border-gray-200 bg-white shadow-xl rounded-md">
      <div className="flex items-center">
        <img className="" src="/like.png" alt="survey" />
        <span className="uppercase font-extrabold">USER Feedback</span>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white font-bold shadow-2xl"
          onClick={saveData}
        >
          Save Data
        </button>
        <button
          className="bg-green-600 text-white font-bolshadow-2xl"
          onClick={submitData}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  saveData: PropTypes.func,
  submitData: PropTypes.func,
};

export default Navbar;
