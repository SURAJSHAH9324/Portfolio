import React from 'react';
import "./About.css";
function About({ isToggled }) {
  return (
    <div
      className={`w-full min-h-screen p-5 ${
        isToggled ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Title with Reduced Margin */}
      <h1
        className={`text-3xl md:text-4xl font-serif font-bold  ${
          isToggled ? 'text-white' : 'text-black'
        }`}
      >
        ABOUT
      </h1>

      <hr className="border-t-2 border-gray-600 my-1" />

      {/* Description */}
      <p
        className={`text-base md:text-lg leading-relaxed ${
          isToggled ? 'text-white' : 'text-gray-800'
        }`}
      >
        I am currently in my final year at Walchand Institute of Technology
        (WIT), Solapur, pursuing a degree in Computer Science. As a passionate
        and dedicated student, I have developed a strong interest in full-stack
        development, which allows me to utilize my skills in both front-end and
        back-end technologies. I have hands-on experience working with the MERN
        stack (MongoDB, Express.js, React.js, Node.js) and have successfully
        contributed to an e-commerce website project using these technologies.
        Living in Mumbai, I am enthusiastic about leveraging my technical skills
        and knowledge to solve real-world problems and contribute to innovative
        projects.
      </p>

      <hr className="border-t-2 border-gray-600 my-2" />

      {/* Links Section */}
      <ul className="flex flex-col md:flex-row md:justify-around gap-4 py-6">
        <a
          className={`flex items-center gap-2 ${
            isToggled ? 'text-yellow-50' : 'text-gray-700'
          }`}
          href="https://search.brave.com/search?q=Mumbai+Ghatkopar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-map-pin-2-line"></i> Mumbai, Maharashtra
        </a>
        <a
          className={`flex items-center gap-2 ${
            isToggled ? 'text-yellow-50' : 'text-gray-700'
          }`}
          href="https://github.com/SURAJSHAH9324"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill"></i> Github
        </a>
        <a
          className={`flex items-center gap-2 ${
            isToggled ? 'text-yellow-50' : 'text-gray-700'
          }`}
          href="https://www.linkedin.com/in/suraj-shah-3586ab219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-line"></i> LinkedIn
        </a>
        <a
          className={`flex items-center gap-2 ${
            isToggled ? 'text-yellow-50' : 'text-gray-700'
          }`}
          href="https://leetcode.com/u/surajshah77881/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-code-line"></i> Leetcode
        </a>
      </ul>
    </div>
  );
}

export default About;
