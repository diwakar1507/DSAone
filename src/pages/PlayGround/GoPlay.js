import React from "react";
import { useParams } from "react-router-dom";
import { getVisualizer } from "./Data";

const GoPlay = () => {
  let params = useParams();
  const Visualizer = getVisualizer(parseInt(params.VID, 10));
  return <Visualizer />;
};

export default GoPlay;
