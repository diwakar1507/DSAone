import React from "react";

function ViewCard(props) {
  return (
    <div className={`relative bg-${(props.index % 2) ? 'plain-white' : 'primary-3'} flex flex-col overflow-hidden rounded-lg ml-auto mr-auto h-96 w-64 shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl`}>
      <div className="h-full">
        <div className="absolute h-full">
          <img src={props.image} alt="To be Added" className="object-cover min-h-full"></img>
        </div>
      </div>
      <div className="z-20 absolute top-0 h-full w-full">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <div className="flex-1 p-4 text-5xl font-Hanseif place-self-start">{props.index}.</div>
          <div className="p-2 mb-10 text-4xl font-Hanseif"> {props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;