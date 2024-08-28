import { useState } from "react";
import PropTypes from 'prop-types';

//  id={item[index]?.id}
//                 type={item[index]?.type}
//                 value={item[index]?.value}
//                 label={item[index]?.label}

const Accordion = ({ title, fields }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
    
    console.log("fields- ",fields)

  return (
    <div className="border border-gray-300 rounded mb-1">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>
          {isOpen ? (
            <img src="/accordion-up.png" alt="close" />
          ) : (
            <img src="/accordion-down.png" alt="close" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-300">
          {fields.map((form, index) => (
            <div className="flex flex-col items-start" key={index}>
              <span className="font-semibold">{form?.label}</span>
              <span>{form?.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Accordion.propTyeps = {
  fields: PropTypes.any,
};

export default Accordion;
