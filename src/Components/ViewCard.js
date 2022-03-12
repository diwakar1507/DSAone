import React from "react";

function ViewCard(props) {
  return (
    <div className={`relative ${props.index % 2 ? 'bg-plain-white' : 'bg-primary-3'} flex flex-col rounded-lg ml-auto mr-auto h-64 w-64 shadow-lg `}>
      <div className="h-full ">
        <div className="relative h-full">
          <img src={props.image} alt="To be Added" className="h-3/4 p-4 absolute top-16 transform transition duration-500 hover:scale-110 hover:shadow-xl"></img>
        </div>
      </div>
      <div className="z-20 absolute top-0 h-full w-full">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <div className="flex-1 p-4 text-3xl font-Hanseif place-self-start">{props.index}. {props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;      