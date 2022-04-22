import React from "react";
import { getStyle } from "../pages/DataStructurePage/Props";

function ViewCard(props) {
  const styles = getStyle(props.index);
  const scheme = props.index % 2;
  return (
    <div
      className={`inline-block ${
        scheme ? "bg-plain-white" : "bg-primary-3"
      } rounded-lg h-64 w-64 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl`}>
      <div
        className={`p-4 text-3xl ${
          scheme ? "text-primary-2" : "text-plain-white"
        }`}>
        {props.index}. {props.name}
      </div>
      <div className={`relative h-full p-4 ${styles.img}`}>
        <img src={props.image} alt="To be Added"></img>
      </div>
    </div>
  );
}

export default ViewCard;
