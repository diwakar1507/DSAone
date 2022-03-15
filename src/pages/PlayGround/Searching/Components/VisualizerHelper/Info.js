import React from "react";

export const Info = ({comparisionCount, children }) => {
  return (
    <div className="">
      <div>
        Comparisions: <strong>{comparisionCount}</strong>
      </div>
    </div>
  );
};

