import React, { useState } from "react";
import Projects from "../Components/Project.jsx";
import Contact from "../Components/Contact.jsx";
import Resume from "../Components/Resume.jsx";

function Component({ isToggled }) {
  const [activeSection, setActiveSection] = useState("Projects");

  const renderContent = () => {
    switch (activeSection) {
      case "Projects":
        return <Projects isToggled={isToggled} />;
      case "Resume":
        return <Resume isToggled={isToggled} />;
      case "Contact":
        return <Contact isToggled={isToggled} />;
      default:
        return <Projects isToggled={isToggled} />;
    }
  };

  return (
    <div className={`px-4 py-2 w-full min-h-screen ${isToggled ? "bg-gray-900" : "bg-white"}`}>
      {/* Navigation Tabs */}
      <div className="flex flex-col md:flex-row justify-around items-center text-center gap-4 md:gap-0">
        <h3
          className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
            activeSection === "Projects" ? "text-black font-bold underline" : ""
          } ${isToggled ? "text-white" : "text-black"} hover:text-text-400 `}
          onClick={() => setActiveSection("Projects")}
        >
          Projects
        </h3>
        <h3
          className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
            activeSection === "Resume" ? "text-black font-bold underline" : ""
          } ${isToggled ? "text-white" : "text-black"} hover:text-black-400`}
          onClick={() => setActiveSection("Resume")}
        >
          Resume
        </h3>
        <h3
          className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${
            activeSection === "Contact" ? "text-black font-bold underline" : ""
          } ${isToggled ? "text-white" : "text-black"} hover:text-black-400`}
          onClick={() => setActiveSection("Contact")}
        >
          Contact
        </h3>
      </div>

      <hr className="border-t-2 border-gray-600 my-4" />

      {/* Content Section */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default Component;
