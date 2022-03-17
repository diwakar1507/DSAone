import React from "react";
import './animate.css'
const Node = ({
  col,
  row,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  const nodeClass = isFinish
  ? 'node-finish'
  : isStart
  ? 'node-start'
  : isWall
  ? 'node-wall'
  : '';
  return (
    <div
      id={`${row} : ${col}`}
      className={`node ${nodeClass}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    />
  );
};

export default Node;
