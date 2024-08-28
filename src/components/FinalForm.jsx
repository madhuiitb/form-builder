import { useState } from "react";
import Sidebar from "./Sidebar";
import FormContainer from "./FormContainer";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { insertFormData } from "../services/apiToinsertFormData";

function FinalForm() {
const location = useLocation();
const query = new URLSearchParams(location.search);
  const value = query.get("value") || "";
  const navigate = useNavigate();
    
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  const addField = (type) => {
    setFields([...fields, { type, id: Date.now() }]);
  };

  const saveData = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const submitData = () => {
    const fieldsArray = Object.entries(formData).flatMap(([type, fields]) =>
      Object.entries(fields).map(([id, field]) => ({
        type: type,
        id: id, 
        value: field.value,
        label: field.label,
      }))
    );

    const formPayload = {
      form_name: value,
      fields: fieldsArray,
    };
    insertFormData(formPayload).then((response) => {
      if (response.success) {
        console.log("Form data inserted successfully");
      } else {
        console.error("Failed to insert form data:", response.error);
      }
    });
     navigate("/");
  };

  return (
    <div className="flex flex-col">
      <Navbar saveData={saveData} submitData={submitData} />
      <div className="flex">
        <FormContainer
          fields={fields}
          formData={formData}
          setFormData={setFormData}
          feedbackForm={value}
        />
        <Sidebar addField={addField} />
      </div>
    </div>
  );
}

export default FinalForm;
