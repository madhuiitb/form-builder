import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import TextareaField from "../components/TextareaField";
import NumericField from "../components/NumericField";
import StarRating from "../components/StarRating";
import EmoticonField from "../components/EmoticonField";

const Card = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/dashboard');
    };

    return (
      <div className="flex justify-center pb-20">
        <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-[500px]">
          <div className="flex justify-between">
            <h2 className="text-l text-white rounded-md bg-blue-700 font-bold p-4 mb-2">
              Generic Website Rating
            </h2>
            <button
              className="text-gray-800 p-x-2 rounded-md"
              onClick={handleSubmit}
            >
              X
            </button>
          </div>
          <form>
            <TextareaField label="Would you like to add a comment?" />
            <NumericField
              label="How likely is it that you will recommend us to your family and
                friends?"
            />
            <StarRating label=" Give a star rating for the website." />
            <EmoticonField label="What is your opinion of this page?" />
            <TextField label='Do you have any suggestions to improve our website?'/>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default Card;