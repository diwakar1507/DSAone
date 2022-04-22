import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GoBack } from "../../Components/GoBackCheck";

const MainAlgo = () => {
  return (
    <div className="bg-primary-1 w-screen relative">
      <div className="fixed top-0 w-screen z-30">
        <div className="flex items-center justify-center backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
          <div className="basis-1/12">
            <GoBack url="/Algorithm" />
          </div>
          <div className="basis-10/12 text-center text-5xl bg-clip-text text-transparent bg-gradient-to-b from-primary-3 to-orange-400 p-8">
            Algorithms
          </div>
          <div className="basis-1/12"></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainAlgo;
