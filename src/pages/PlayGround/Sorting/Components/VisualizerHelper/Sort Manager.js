import React, { useEffect, useRef, useState } from "react";
import { ArrayContainer } from "./ArrayContainer";
import { MergeContainer } from "./MergeContainer";
import { Info } from "./Info";
import { Timer } from "./Timer";
import { delay } from "../../Common/helper";
import shallow from "zustand/shallow";
import { useControls, useData } from "../../Common/store";

let compareTime = useControls.getState().compareTime;
let swapTime = useControls.getState().swapTime;

useControls.subscribe(
  ([cTime, sTime]) => {
    compareTime = cTime;
    swapTime = sTime;
  },
  (state) => [state.compareTime, state.swapTime],
  shallow
);

export const SortManager = React.memo(function ({
  array,
  sortFunction,
  sortingAlgorithmName,
}) {
  const [swapIndices, setSwapIndices] = useState([-1, -1]);
  const [hightlightedIndices, setHightlightedIndices] = useState([-1, -1]);

  const algoArray = useRef([]);
  const sortedIndices = useRef([]);
  const pivot = useRef(-1);
  const swapCount = useRef(0);
  const comparisionCount = useRef(0);
  const isAlgoExecutionOver = useRef(false);
  const isComponentUnMounted = useRef(false);

  const markSortngDone = useControls((state) => state.markSortngDone);
  const progress = useRef("");
  const sortProgressIterator = useRef(null);

  async function reset() {
    algoArray.current = [...useData.getState().sortingArray];
    sortedIndices.current = [];
    pivot.current = -1;
    swapCount.current = 0;
    comparisionCount.current = 0;
    isAlgoExecutionOver.current = false;
    setSwapIndices([-1, -1]);
    setHightlightedIndices([-1, -1]);

    sortProgressIterator.current =
      sortingAlgorithmName === "MergeSort"
        ? await sortFunction(algoArray.current, combine, highlight, markSort)
        : await sortFunction(algoArray.current, swap, highlight, markSort);
  }

  useEffect(() => {
    progress.current = useControls.getState().progress;
    useControls.subscribe(
      (value) => {
        progress.current = value;
        
        if (progress.current === "start") runAlgo();
        if (progress.current === "reset") reset();
      },
      (state) => state.progress,
    );

    return () => {
      isComponentUnMounted.current = true;
    };
  }, []);

  useEffect(() => {
    reset();
  }, [array]);

  async function runAlgo() {
    let completion = { done: false };
    while (
      !completion?.done &&
      progress.current === "start" &&
      !isComponentUnMounted.current
    ) {
      completion = await sortProgressIterator.current?.next();
    }

    if (isComponentUnMounted.current) {
      return;
    }

    if (!isAlgoExecutionOver.current && completion?.done) {
      isAlgoExecutionOver.current = true;
      pivot.current = -1;
      setSwapIndices([-1, -1]);
      setHightlightedIndices([-1, -1]);
      markSortngDone();
    }
  }

  async function swap(i, j) {
    let tmp = algoArray.current[i];
    algoArray.current[i] = algoArray.current[j];
    algoArray.current[j] = tmp;
    setSwapIndices([i, j]);
    
    pivot.current = -1;
    swapCount.current += 1;
    await delay(swapTime);
  }

  async function combine(source, destination) {
    if (source !== destination) {
      swapCount.current += 1;
      setHightlightedIndices([-1, -1]);
      setSwapIndices([source, destination]);
      await delay(swapTime);
    }
  }

  async function highlight(indices, p) {
    setSwapIndices([-1, -1]);
    comparisionCount.current += 1;
    pivot.current = p;
    setHightlightedIndices(indices);
    await delay(compareTime);
  }

  function markSort(...indices) {
    sortedIndices.current.push(...indices);
  }

  const mergeContainer = (
    <MergeContainer
      array={algoArray.current}
      source={swapIndices[0]}
      destination={swapIndices[1]}
      hightlightedIndices={hightlightedIndices}
      sortedIndices={sortedIndices.current}
    />
  );
  const arrayContainer = (
    <ArrayContainer
      array={algoArray.current}
      source={swapIndices[0]}
      destination={swapIndices[1]}
      pivot={pivot.current}
      highlightIndices={hightlightedIndices}
      sortedIndices={sortedIndices.current}
    />
  );

  return (
    <div className="p-3 border-2 border-primary-3">
      <div className="flex justify-between items-center gap-x-5">
        <strong className="text-primary-3 border-b border-primary-3">{sortingAlgorithmName}</strong>
        <div className="flex gap-x-1 justify-end">
          <span>Time:</span>
          <strong>
            <Timer
              isAlgoExecutionOver={isAlgoExecutionOver.current}
            />
          </strong>
        </div>
      </div>
      {sortingAlgorithmName === "MergeSort" ? mergeContainer : arrayContainer}
      <Info
        swapCount={swapCount.current}
        comparisionCount={comparisionCount.current}
      ></Info>
    </div>
  );
});