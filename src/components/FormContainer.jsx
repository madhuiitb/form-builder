// src/components/FormContainer.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import TextareaField from './TextareaField';
import NumericField from './NumericField';
import EmoticonField from './EmoticonField';
import RadioRating from './RadioButton';
import StarRating from './StarRating';


  const defaultLabels = {
    textarea: "Would you like to add a comment?",
    number:
      "How likely is it that you will recommend us to your family and friends?",
    star: "Give a star rating for the website.",
    emoticon: "What is your opinion of this page?",
    text: "Do you have any suggestions to improve our website?",
    radio: "Multiple choice - 1 answer",
    category: "Pick a subject and provide your feedback:",
  };

function FormContainer({ feedbackForm, fields, formData, setFormData }) {
  const handleInputChange = (type, id, key, value) => {    
    setFormData((prevData) => ({
      ...prevData,
      [type]: {
        ...prevData[type],
        [id]: {
          label: key === "label" ? value : prevData[type]?.[id]?.label || defaultLabels[type],
          ...prevData[type]?.[id],
          [key]: value,
        },
      },
    }));
  };

  return (
    <div className="w-4/6 bg-white ">
      <form className="flex flex-col items-center justify-center gap-6 bg-gray-100 shadow-xl min-w-[500px] rounded-xl m-4">
        <h3 className="font-extrabold items-center justify-center  bg-blue-600 w-full p-4 rounded-t-xl  text-white">
          {feedbackForm}
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {fields.map((field, index) => {
            switch (field.type) {
              case "text":
                return (
                  <TextField
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("text", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("text", field.id, "label", label)
                    }
                  />
                );
              case "textarea":
                return (
                  <TextareaField
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("textarea", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("textarea", field.id, "label", label)
                    }
                  />
                );
              case "number":
                return (
                  <NumericField
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("number", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("number", field.id, "label", label)
                    }
                  />
                );
              case "radio":
                return (
                  <RadioRating
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("number", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("number", field.id, "label", label)
                    }
                  />
                );
              case "star":
                return (
                  <StarRating
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("number", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("number", field.id, "label", label)
                    }
                  />
                );
              case "emoticon":
                return (
                  <EmoticonField
                    key={field.id}
                    id={field.id}
                    label={defaultLabels[field.type]}
                    onChange={(value) =>
                      handleInputChange("emoticon", field.id, "value", value)
                    }
                    onLabelChange={(label) =>
                      handleInputChange("emoticon", field.id, "label", label)
                    }
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </form>
    </div>
  );
}

FormContainer.propTypes = {
  fields: PropTypes.any,
  formData: PropTypes.any,
  setFormData: PropTypes.func,
};

export default FormContainer;
