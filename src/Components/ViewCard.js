import React from "react";
import { getStyle } from "../pages/DataStructurePage/Props";

function ViewCard(props) {
  const styles = getStyle(props.index);
  const scheme = props.index % 2;
  return (
    <div className={`relative ${scheme ? 'bg-plain-white' : 'bg-primary-3'} rounded-lg h-64 w-64 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl`}>
      <div className={`p-4 text-3xl ${scheme ? 'text-primary-2' : 'text-plain-white'}`}> {props.index}. {props.name}</div>
      <div className={`relative h-full p-4 ${styles.img}`}>
        <img src={props.image} alt="To be Added"></img>
      </div>
    </div>
  );
}

export default ViewCard;      

{/* <div className={`relative ${props.index % 2 ? 'bg-plain-white' : 'bg-primary-3'} flex flex-col rounded-lg ml-auto mr-auto h-64 w-64 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl`}>
<div className="h-full ">
  <div className="relative h-full">
    <img src={props.image} alt="To be Added" className="h-3/4 p-4 absolute top-16 "></img>
  </div>
</div>
<div className="z-20 absolute top-0 h-full w-full">
  <div className="flex flex-col h-full w-full justify-center items-center">
    <div className="flex-1 p-4 text-3xl font-Hanseif place-self-start">{props.index}. {props.name}</div>
  </div>
</div>
</div> */}