import React from "react";

export const Info = ({ comparisionCount, children }) => {
  return (
    <div>
      Comparisions: <strong>{comparisionCount}</strong>
    </div>
  );
};
