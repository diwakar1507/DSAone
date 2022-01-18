import React, { useEffect, useRef, useCallback } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Styles.css";
import hillBack from "../../img/Landing Page/Section 1/Hills/Hill Back.svg";
import hillMiddle from "../../img/Landing Page/Section 1/Hills/Hill Middle.svg";
import hillFront from "../../img/Landing Page/Section 1/Hills/Hill Front.svg";
import Moon from "../../img/Landing Page/Section 1/Moon.svg";

const LandingPage = () => {
  return (
    <div className="text-l text-[#D1D1D1]">
      <div className="bg-[#637D97] h-screen w-screen relative">
        <div className="w-full h-8 pt-6 absolute">
          <div className="flex">
            <div className="basis-1/2 flex">
              <div className="pl-24 basis-1/4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="19"
                  viewBox="0 0 32 19">
                  <g transform="translate(-96 -50)">
                    <g
                      transform="translate(96 50)"
                      fill="#d1d1d1"
                      stroke="#d1d1d1"
                      stroke-width="1">
                      <rect width="14" height="3" rx="1.5" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="13"
                        height="2"
                        rx="1"
                        fill="none"
                      />
                    </g>
                    <g
                      transform="translate(96 58)"
                      fill="#d1d1d1"
                      stroke="#d1d1d1"
                      stroke-width="1">
                      <rect width="32" height="3" rx="1.5" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="2"
                        rx="1"
                        fill="none"
                      />
                    </g>
                    <g
                      transform="translate(114 66)"
                      fill="#d1d1d1"
                      stroke="#d1d1d1"
                      stroke-width="1">
                      <rect width="14" height="3" rx="1.5" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="13"
                        height="2"
                        rx="1"
                        fill="none"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex pl-28 justify-around basis-3/4">
                <div>DataStructures</div>
                <div>Algorithm</div>
                <div>About</div>
              </div>
            </div>
            <div className="basis-1/2 flex justify-end pr-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.849"
                height="30.848"
                viewBox="0 0 30.849 30.848">
                <path
                  d="M32.463,28.179l-7.307-6.215A3.261,3.261,0,0,0,22.94,21,11.57,11.57,0,1,0,21.645,22.3a3.261,3.261,0,0,0,.962,2.216l6.215,7.307a2.592,2.592,0,1,0,3.641-3.641ZM14.139,21.208A7.712,7.712,0,1,1,21.851,13.5a7.712,7.712,0,0,1-7.712,7.712Z"
                  transform="translate(-2.571 -1.928)"
                  fill="#d1d1d1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute h-1/3 w-3/12 left-56 top-36">
          <div className="text-9xl">DSA</div>
          <div>
            <svg height="2" width="350">
              <line x1="25" x2="300" stroke="#b6b6b6" stroke-width="4" />
            </svg>
          </div>
          <div className="text-7xl ml-28">one</div>
          <div className="text-3xl ml-11 mt-5">Learn By Fun...</div>
        </div>
        <div className="absolute h-screen w-full top-20">
          <div className="w-full h-screen relative pt-20">
            <img
              className=" absolute w-full h-full bottom-0 left-0 object-cover "
              src={hillBack}
              alt="Hill"
            />
            <img
              className=" absolute h-2/5 bottom-20 left-56 mix-blend-screen"
              src={Moon}
              alt="Moon"
            />
            <img
              className=" absolute w-full h-full bottom-14 left-0 object-cover "
              src={hillMiddle}
              alt="Hill"
            />
            <img
              className=" absolute w-full h-full bottom-6 left-0 object-cover "
              src={hillFront}
              alt="Hill"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#041C32] h-screen w-screen relative"></div>
    </div>
  );
};

export default LandingPage;
