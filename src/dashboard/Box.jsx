import { useNavigate } from "react-router-dom";
import { deleteDashbordItem, deleteMatchingRow } from "../services/apiDashboard";


const Box = ({ feedback }) => {
  const { id, name, created_at, submitted, views } = feedback;
  
  const navigate = useNavigate();

  function handleViewSubmission(e) {
     e.preventDefault();
    const viewForm = e.target.value;
      navigate(`/feedback?value=${encodeURIComponent(viewForm)}`);
  }
  function handleEdit(e) {
     e.preventDefault();
    const editForm = e.target.value;
    navigate(`/feedback?value=${encodeURIComponent(editForm)}`);
  }

  function handleDelete(e) {
    e.preventDefault();
     const deleteForms = e.target.value;
    //  navigate(`/feedback?value=${encodeURIComponent(deleteForms)}`);
    console.log(e.target.id, deleteForms);
    deleteDashbordItem(e.target.id)
    navigate("/dashboard");
    //  deleteMatchingRow();
  }

  return (
    <div className="w-[300px] h-[380px] bg-[#FFFFFF] rounded-xl shadow-xl">
      <div className="bg-[#F5D563] flex justify-center items-center min-h-[68px] px-1 rounded-t-xl">
        <img src="/survey-standard.png" alt='survey' />
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="font-roboto text-2xl font-medium leading-8 tracking-tight text-left">
          {name}
        </div>
        <div>
          <div className="flex justify-between py-1">
            <div>Submitted</div>
            <div>{submitted}</div>
          </div>
          <div className="flex justify-between py-1">
            <div>Views</div>
            <div>{views}</div>
          </div>
          <div className="flex justify-between py-1">
            <div>Date Published</div>
            <div>20/10/2024</div>
          </div>
        </div>
      </div>
      <div className="grid flex-wrap items-center justify-center py-6 gap-4">
        <button
          className="col-span-3 bg-purple-600 text-white font-bold uppercase"
          name="View submission"
          value={name}
          onClick={handleViewSubmission}
        >
          View submission
        </button>
        <button
          className="col-span-1 bg-green-700 text-white font-bold uppercase"
          name="Edit"
          onClick={handleEdit}
        >Edit
        </button>
        <button
          className="col-span-1 bg-blue-700 text-white font-bold uppercase"
          name="Delete"
          id={id}
          value={name}
          onClick={(e)=>handleDelete(e)}
        >Delete
        </button>
      </div>
    </div>
  );
};

export default Box;