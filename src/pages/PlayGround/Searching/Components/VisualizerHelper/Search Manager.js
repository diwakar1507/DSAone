import React, { useEffect, useRef, useState } from "react";
import { useControls, useData } from "../../Common/store";
import { delay } from "../../../Common/helper";
import { Timer } from "./Timer";
import { Info } from "./Info";
import ArrayContainer from "./ArrayContainer";

export const SearchManager = React.memo(function ({
  array,
  searchElement,
  searchFunction,
  searchingAlgorithmName,
}) {
  // Points current element to be checked
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [algoArray, setAlgoArray] = useState(array);
  // array from which we have to search
  // const algoArray = useRef([]);
  // element that is to be searched
  const element = useRef(null);
  // to mark visited indices
  // const checkedIndices = useRef([]);
  const [checkedIndices, setCheckIndices] = useState([]);
  // element found at index
  const foundIndex = useRef(-1);
  // counts total comparision count
  const comparisionCount = useRef(0);
  // algorithm status
  const isAlgoExecutionOver = useRef(false);
  // component mount status
  const isComponentUnMounted = useRef(false);

  // marks searching Done
  const markSearchingDone = useControls((state) => state.markSearchingDone);
  // current progress
  const progress = useRef("");
  // used to get next values from search algorithms
  const searchProgressIterator = useRef(null);
  const compareTime = useRef(useControls.getState().compareTime);

  async function reset() {
    // algoArray.current = [...useData.getState().searchingArray];
    element.current = useData.getState().searchElement;
    setCheckIndices([]);
    foundIndex.current = -1;
    comparisionCount.current = 0;
    isAlgoExecutionOver.current = false;
    setHighlightedIndex(-1);
    if (
      searchingAlgorithmName === "Binary Search" ||
      useData.getState().algorithm === 2
    ) {
      var currentArray = [];
      currentArray.push.apply(currentArray, useData.getState().searchingArray);
      currentArray.sort(function (a, b) {
        return a - b;
      });
      searchProgressIterator.current = await searchFunction(
        currentArray,
        element.current,
        check,
        markVisited,
        markFound
      );
      setAlgoArray(currentArray);
    } else {
      searchProgressIterator.current = await searchFunction(
        algoArray,
        element.current,
        check,
        markVisited,
        markFound
      );
      setAlgoArray(useData.getState().searchingArray);
    }
  }

  useEffect(() => {
    progress.current = useControls.getState().progress;
    useControls.subscribe(
      (state) => {
        progress.current = state.progress;
        if (progress.current === "start") runAlgo();
        if (progress.current === "reset") reset();
      },
      (state) => state.progress
    );
    useControls.subscribe((state) => {
      if (compareTime !== state.compareTime)
        compareTime.current = state.compareTime;
    });
    return () => {
      isComponentUnMounted.current = true;
    };
  }, []);

  useEffect(() => {
    reset();
  }, [array]);

  useEffect(() => {
    reset();
  }, [searchElement]);

  async function runAlgo() {
    let completion = { done: false };
    while (
      !completion?.done &&
      progress.current === "start" &&
      !isComponentUnMounted.current
    ) {
      completion = await searchProgressIterator.current?.next();
    }
    if (isComponentUnMounted.current) {
      return;
    }
    if (!isAlgoExecutionOver.current && completion?.done) {
      isAlgoExecutionOver.current = true;
      setHighlightedIndex(-1);
      markSearchingDone();
    }
  }
  // Purpose is to change color of element that is going to be checked
  async function check(index) {
    setHighlightedIndex(index);
    comparisionCount.current += 1;
    await delay(compareTime.current);
  }
  // Purpose is to change color of element that has been checked
  async function markVisited(index) {
    // checkedIndices.current.push(...indices);
    setCheckIndices((oldArray) => [...oldArray, index]);
  }
  async function markFound(index) {
    foundIndex.current = index;
  }

  const Container = (
    <ArrayContainer
      array={algoArray}
      highlightIndex={highlightedIndex}
      checkedIndices={checkedIndices}
      foundAt={foundIndex.current}
    />
  );

  return (
    <div className="p-3 border-2 border-primary-3">
      <div className="flex justify-between items-center gap-x-5">
        <strong className="text-primary-3 border-b border-primary-3">
          {searchingAlgorithmName}
        </strong>
        <div className="flex gap-x-1 justify-end">
          <span>Time:</span>
          <strong>
            <Timer isAlgoExecutionOver={isAlgoExecutionOver.current} />
          </strong>
        </div>
      </div>
      {Container}
      <div className="flex justify-between">
        <Info comparisionCount={comparisionCount.current}></Info>
        {isAlgoExecutionOver.current
          ? foundIndex.current !== -1
            ? `${element.current} found at index ${foundIndex.current} `
            : `${element.current} not present in the array`
          : null}
      </div>
    </div>
  );
});
