import { useEffect, useState } from "react";
import { getMatchingForms } from "../services/apiFeedbackDetails";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "./Accordion";

const FeedbackDetails = () => {
    const [feedbackDetails, setFeedbackDetails] = useState([]);
    
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const feedbackName = query.get("value") || "";
    const navigate = useNavigate();
    

      useEffect(() => {
        const fetchData = async () => {
            const response = await getMatchingForms(feedbackName);
          const data = Array.isArray(response)
            ? response
            : await response.json();
          setFeedbackDetails(data);
        };

        fetchData();
      }, [feedbackName]);
    
    const extractedFields = feedbackDetails?.map((form) =>
      form.fields.map(({ id, type, value, label }) => ({ id, type, value, label }))
    );

    const handleClick = () => {
        navigate('/')
    }

    return (
      <div className="min-w-[640px] bg-gray-200 rounded-t-xl">
        <div className="w-full flex justify-between text-white font-extrabold bg-blue-600 p-4 rounded-t-xl">
          <div className="flex items-center">
            <img src="/back.png" alt="survey" onClick={handleClick} />
            <span>{feedbackName}</span>
          </div>
          <div>Created Date: 20/10/2024</div>
        </div>

        <div className="flex flex-col">
          {feedbackDetails?.map((item, index) => {
            return (
              <Accordion
                key={index}
                title={`Feedback ${index + 1}`}
                fields={item.fields}
              />
            );
          })}
        </div>
      </div>
    );
}

export default FeedbackDetails;