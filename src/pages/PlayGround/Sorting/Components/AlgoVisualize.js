import React, { useEffect } from "react";
import { sortingAlgorithms } from "../Common/config";
import { useControls, useData } from "../Common/store";
import shallow from "zustand/shallow";
import { SortManager } from "./VisualizerHelper/Sort Manager";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%" }}>
      {value === index && children}
    </div>
  );
}

const AlgoVisualize = () => {
  const resetSorting = useControls((state) => state.resetSorting);

  const [sortingArray, algorithm] = useData(
    (state) => [state.sortingArray, state.algorithm],
    shallow
  );

  useEffect(() => {
    resetSorting();
  }, [algorithm]);

  if (sortingArray.length === 0)
    return (
      <div className="flex justify-center mt-12 text-plain-white text-3xl">
        Please enter input array or use generate button
      </div>
    );

  return (
    <div className="flex justify-center text-plain-white text-lg mt-12 pb-12">
      {sortingAlgorithms.map((algoInfo, idx) => (
        <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
          <SortManager
            array={sortingArray}
            sortFunction={algoInfo.component}
            sortingAlgorithmName={algoInfo.name}
          />
        </TabPanel>
      ))}
      <TabPanel value={algorithm} index={sortingAlgorithms.length}>
        <div className="flex flex-wrap justify-center max-w-full gap-x-3 gap-y-3">
          {sortingAlgorithms.map((algoInfo) => (
            <SortManager
              array={sortingArray}
              sortFunction={algoInfo.component}
              sortingAlgorithmName={algoInfo.name}
              key={algoInfo.name}
            />
          ))}
        </div>
      </TabPanel>
    </div>
  );
};

export default AlgoVisualize;
