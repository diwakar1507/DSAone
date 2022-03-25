// Handles rendering the footer for the page (Contacts)
import React from "react";
import finishFlag from "../media/finish-flag.svg";
import startFlag from "../media/start-flag.svg";
import "./header.css";
function Header() {
  return (
    <div className=" px-32 py-4 bg-primary-2 flex text-xl text-white justify-between">
      <div className=" flex">
        <img className="bg-green-200  mr-2"
          src={startFlag} />
        <p>Start Node</p>
      </div>
      <div className="flex">
        <img className="bg-red-300 mr-2"
          src={finishFlag} />
        <p>End Node</p>
      </div>
      <div className=" flex">
        <div className="w-6 h-6 bg-sky-500 mr-2"></div>
        <p>Visited Node</p>
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-gray-900 mr-2"></div>
        <p>Unvisited Node</p>
      </div>
      <div className=" flex">
        <div className="w-6 h-6 bg-purple-300 mr-2"></div>
        <p>Wall Node</p>
      </div>
      <div className="flex">
        <div className="w-6 h-6 bg-yellow-400 mr-2"></div>
        <p>Shortest Path Node</p>
      </div>

    </div>
  );
}

export default Header;