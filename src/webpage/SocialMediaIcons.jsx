import { FaWhatsapp, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col items-center space-y-4 gap-6 mr-10">
      <a>
        <FaFacebook className="h-6 w-6 text-blue-600" />
      </a>
      <a >
        <FaWhatsapp className="h-6 w-6 text-green-500" />
      </a>
      <a >
        <FaTwitter className="h-6 w-6 text-blue-700" />
      </a>
      <a >
        <FaLinkedin className="h-6 w-6 text-blue-700" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
