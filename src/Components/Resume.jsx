import React from "react";
import "./Resume.css";
import { SiExpress, SiCplusplus } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJava, FaDatabase } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function Resume({ isToggled }) {
  return (
    <div
      className={`px-6 py-4 min-h-screen ${
        isToggled ? "bg-gray-900 text-black" : " text-black"
      }`}
    >
      {/* Skills Section */}
      <div className="mb-6">
        <h2 className={
            `
            text-2xl font-bold mb-4
            ${
              isToggled ? "text-white":""
            }
            `
        }>Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li className="skill-item flex items-center gap-2">
            <i className="ri-html5-line"></i> HTML
          </li>
          <li className="skill-item flex items-center gap-2">
            <i className="ri-css3-fill"></i> CSS
          </li>
          <li className="skill-item flex items-center gap-2">
            <i className="ri-javascript-fill"></i> JavaScript
          </li>
          <li className="skill-item flex items-center gap-2">
            <i className="ri-reactjs-line"></i> React
          </li>
          <li className="skill-item flex items-center gap-2">
            <BiLogoMongodb /> MongoDB
          </li>
          <li className="skill-item flex items-center gap-2">
            <i className="ri-nodejs-line"></i> Node.js
          </li>
          <li className="skill-item flex items-center gap-2">
            <SiCplusplus /> C++
          </li>
          <li className="skill-item flex items-center gap-2">
            <FaJava /> Java
          </li>
          <li className="skill-item flex items-center gap-2">
            <SiExpress /> Express
          </li>
          <li className="skill-item flex items-center gap-2">
            <FaDatabase /> SQL
          </li>
          <li className="skill-item flex items-center gap-2">
            <IoLogoFirebase /> Firebase
          </li>
          <li className="skill-item flex items-center gap-2">
            <RiTailwindCssFill /> Tailwind CSS
          </li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="mb-6">
        <h2 className={
            `
            text-2xl font-bold mb-4
            ${
              isToggled ? "text-white":""
            }
            `
        }>Certifications</h2>
        <ul className="list-disc ml-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          <li className="certification-item">Problem Solving (Basic)</li>
          <li className="certification-item">Frontend Developer (React)</li>
          <li className="certification-item">SQL</li>
          <li className="certification-item">Google Cloud Career Program</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="mb-6">
        <h2 className={
            `
            text-2xl font-bold mb-4
            ${
              isToggled ? "text-white":""
            }
            `
        }>Achievements</h2>
        <ul className="list-disc ml-5">
          <li className="achievement-item">
            LeetCode: Solved over 210+ challenging DSA questions.
          </li>
          <li className="achievement-item">
            Awarded Flipkart vouchers worth ₹2000 as a prize in the Codeathon
            Coding Contest (9th Rank).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
