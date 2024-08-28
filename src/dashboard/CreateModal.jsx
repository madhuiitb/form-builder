import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// import Modal from "react-modal";
// import { useNavigate } from "react-router-dom";
// import CustomModal from "../../ui/CustomModel";
import Modal from "../components/Modal";

const CreateModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return (
      <div className="flex flex-col justify-center items-center w-[300px] h-[380px] bg-white shadow-2xl text-blue-800 p-4 rounded-xl border border-gray-200">
        <img src="/plus-large.png" alt="survey" onClick={openModal} />
        <h1>New Form</h1>
        <div>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Create Feedback Form"
          />
        </div>
      </div>
    );
};

export default CreateModal;
