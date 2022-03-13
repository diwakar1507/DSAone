import React from "react";
import ControllBar from "./Components/ControllBar";
import NavBar from "./Components/NavBar";

const SortPlayground = () => {
  return (
    <div className="bg-primary-1 min-h-screen max-h-full w-full relative">
      <NavBar />
      <ControllBar/>
    </div>
  );
};

export default SortPlayground;
