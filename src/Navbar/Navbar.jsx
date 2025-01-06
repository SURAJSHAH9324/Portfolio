import React from "react";
import "./Navbar.css";

function Navbar({ isToggled, handleToggle }) {
  return (
    <nav
      className={`flex items-center justify-between px-6 py-3 w-full shadow-md ${
        isToggled ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Side: Logo and Name */}
      <div className="flex items-center gap-3">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-md"
        />
        <h3 className="text-lg font-serif font-semibold">SURAJ</h3>
      </div>

     

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="text-2xl cursor-pointer  flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        {isToggled ? (
          <i className="ri-toggle-fill"></i>
        ) : (
          <i className="ri-toggle-line"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
