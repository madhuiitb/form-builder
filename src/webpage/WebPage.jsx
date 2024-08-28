import Card from "./Card";
import PhoneNumber from "./PhoneNumber";
import Section from "./Section";
import SocialMediaIcons from "./SocialMediaIcons";
import WebNavbar from "./WebNavbar";

const WebPage = () => {
    return (
      <div className="bg-gray-900 text-white min-w-[1280px] min-h-[420px]">
        <WebNavbar />
        <Section />
            <div className="flex items-center justify-between">
            <PhoneNumber />
          <Card />
          <SocialMediaIcons />
        </div>
      </div>
    );
}

export default WebPage;