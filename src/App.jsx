import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import About from "./About/About";
import Component from "./Components/Component";
import Footer from "./Components/Footer";

function App() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <main
      className={`w-screen min-h-screen  flex flex-col ${
        isToggled ? "bg-gray-900 text-black" : "bg-white text-black"
      }`}
    >
      <Navbar isToggled={isToggled} handleToggle={handleToggle} />

      {/* Profile Section */}
      <Profile isToggled={isToggled} />

      {/* About and Component Section */}
      <div className="flex flex-col md:flex-row gap-4 px-4 mt-60">
        <div className="w-full md:w-[30%]">
          <About isToggled={isToggled} />
        </div>
        <div className="w-full md:w-[70%]">
          <Component isToggled={isToggled} />
        </div>
      </div>

      <Footer isToggled={isToggled} />
    </main>
  );
}

export default App;
