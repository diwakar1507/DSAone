import React from "react";

export const Info = ({ swapCount, comparisionCount, children }) => {
  return (
    <div className="flex justify-between">
      <div>
        Swaps: <strong>{swapCount}</strong>
      </div>
      <div>
        Comparisions: <strong>{comparisionCount}</strong>
      </div>
    </div>
  );
};

