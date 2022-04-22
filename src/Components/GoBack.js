import React from "react";
import { useNavigate } from "react-router";

export const GoBack = (props) => {
  const history = useNavigate();

  const back = () => {
    history(props.url);
  };

  return (
    <div className="">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        onClick={back}
        fill="#FD7014"
        className="h-20 w-20 transform scale-90 transition ease-in duration-200 hover:scale-75 focus:outline-none"
      >
        <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
      </svg>
    </div>
  );
};
