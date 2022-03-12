import React from "react";
import { Outlet } from "react-router-dom";

const NewMainDS = () => {
  return (
    <div className="bg-primary-1 h-screen w-screen relative">
      <div className="fixed top-0 w-screen z-30">
        <div className="backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
          <div className="flex p-8">
            <div className="flex-1 text-white">Data Structure</div>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default NewMainDS;
