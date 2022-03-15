import React from "react";
import { Link, Outlet } from "react-router-dom";
import {getVisualizations} from './Data'
const SelectPlay = () => {
  const visualizations = getVisualizations();
  return (
    <div className="bg-primary-1 w-screen h-screen relative">
      <div className="fixed top-0 w-screen z-30">
        <div className="backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
          <div className="flex p-8 text-plain-white">
            <Link to={`/`} className="flex-1 text-3xl">
              DSAone
            </Link>
            <div className="text-5xl">PlayGround</div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="bg-primary-1 min-h-screen max-h-full min-w-full relative">
      <div className="flex pt-24 justify-center">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-20 pt-4">
            {visualizations.map((visualizer) => (
              <div key={visualizer.index}>
                <Link
                  className="ml-6 text-3xl text-plain-white"
                  to={`/PlayGround/${visualizer.index}`}
                  key={visualizer.index}>
                  {visualizer.index}. {visualizer.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SelectPlay;
