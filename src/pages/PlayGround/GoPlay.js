import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVisualizer } from "./Data";
const GoPlay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let params = useParams();
  const Visualizer = getVisualizer(parseInt(params.VID, 10));
  return <Visualizer />;
};

export default GoPlay;
