import React from "react"; 
import "./Footer.css";
function Footer({ isToggled }) {
  return (
    <footer
      className={`text-center bottom-0 py-4 mt-32 ${
        isToggled ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <p>&copy; {new Date().getFullYear()} Suraj Sandeep Shah. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
