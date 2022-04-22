import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getVisualizations } from "./Data";
import { GoBack } from "../../Components/GoBack";
const SelectPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const visualizations = getVisualizations();
  return (
    <div className="bg-primary-1 w-screen h-screen relative">
      <div className="fixed top-0 w-screen z-30">
        <div className="flex items-center justify-center backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
          <div className="basis-1/12">
            <GoBack url="/" />
          </div>
          <div className="basis-10/12 text-center text-5xl bg-clip-text text-transparent bg-gradient-to-b from-primary-3 to-orange-400 p-8">
            PlayGround
          </div>
          <div className="basis-1/12"></div>
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
