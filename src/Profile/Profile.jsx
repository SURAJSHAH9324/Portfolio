import React from "react";

function Profile({ isToggled }) {
  const handleDownload = () => {
    const resumeUrl = "./suraj_shah.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume_Suraj_Sandeep_Shah.pdf";
    link.click();
  };

  return (
    <div
      className={`flex flex-col  items-center justify-center gap-6 px-6 mt-10 ${
        isToggled ? "text-white" : "text-black"
      }`}
    >
      {/* Profile Image */}
      <img
        className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-gray-300 object-cover transform transition-transform duration-300 hover:scale-110"
        src="/images/Me.jpg"
        alt="Profile"
      />

      {/* Profile Details */}
      <div className="text-center max-w-md">
        <p className="text-xs text-gray-400 mb-1">
          Web Developer | AI Enthusiast
        </p>
        <h4 className="text-2xl font-semibold">Suraj Sandeep Shah</h4>
        <p className="text-sm mt-2 text-wrap">
          B.Tech (CSE) student skilled in web development using the MERN stack
          and backend API development. Proficient in C++ and OOPs concepts, with
          a passion for building efficient and scalable software solutions.
        </p>

        {/* Contact Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button className="bg-transparent border-2 border-gray-500 p-2 rounded-md flex items-center gap-2">
            <span className="text-gray-500">
              <i className="ri-mail-fill"></i> <a href="mailto:surajshah77881@gmail.com">surajshah77881@gmail.com</a>
            </span>
          </button>
          <button className="bg-transparent border-2 border-gray-500 p-2 rounded-md flex items-center gap-2">
            <span className="text-gray-500">
              <i className="ri-phone-line"></i> +91 8452844458
            </span>
          </button>
          <button
            onClick={handleDownload}
            className="bg-transparent border-2 border-gray-500 p-2 rounded-md flex items-center gap-2"
          >
            <span className="text-gray-500">
              <i className="ri-arrow-down-line"></i> Download Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
