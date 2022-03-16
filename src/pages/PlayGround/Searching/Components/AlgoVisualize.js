import React, { useEffect } from "react";
import { searchingAlgorithms } from "../Common/config";
import { useControls, useData } from "../Common/store";
import shallow from "zustand/shallow";
import { SearchManager } from "./VisualizerHelper/Search Manager";

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
  const resetSearching = useControls((state) => state.resetSearching);

  const [searchingArray, algorithm] = useData(
    (state) => [state.searchingArray, state.algorithm],
    shallow
  );

  const searchElement = useData((state) => state.searchElement);

  useEffect(() => {
    resetSearching();
  }, [algorithm]);

  if (searchingArray.length === 0) {
    return (
      <div className="flex justify-center mt-12 text-plain-white text-3xl">
        Please enter input array or use generate button
      </div>
    );
  }
  return (
    <>
      {searchElement === null ? (
        <div className="flex justify-center mt-12 text-plain-white text-3xl">
          Please enter element To Be Searched
        </div>
      ) : null}
      <div className="flex justify-center text-plain-white text-lg mt-12 pb-12">
        {searchingAlgorithms.map((algoInfo, idx) => (
          <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
            <SearchManager
              array={searchingArray}
              searchElement={searchElement}
              searchFunction={algoInfo.component}
              searchingAlgorithmName={algoInfo.name}
            />
          </TabPanel>
        ))}
        <TabPanel value={algorithm} index={searchingAlgorithms.length}>
          <div className="flex flex-wrap justify-center max-w-full gap-x-3 gap-y-3">
            {searchingAlgorithms.map((algoInfo) => (
              <SearchManager
                array={searchingArray}
                searchElement={searchElement}
                searchFunction={algoInfo.component}
                searchingAlgorithmName={algoInfo.name}
                key={algoInfo.name}
              />
            ))}
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default AlgoVisualize;
