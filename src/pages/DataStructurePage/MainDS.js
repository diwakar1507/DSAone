import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainDS = () => {
  return (
    <div className="bg-primary-1 w-screen relative overflow-hidden">
      <div className="fixed top-0 w-screen z-30">
        <div className="backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
          <div className="flex p-8 text-plain-white">
            <Link to={`/`} className="flex-1 text-3xl">
              DSAone
            </Link>
            <div className="text-5xl">Data Structures</div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainDS;
