import create from "zustand";
import { devtools } from "zustand/middleware";
import { searchingArray, compareTime, searchingAlgorithms } from "./config";

export const useControls = create(
  devtools((set) => ({
    progress: "reset",
    speed: 3,
    compareTime: compareTime,
    doneCount: 0,
    startSearching: () => set({ progress: "start" }),
    pauseSearching: () => set({ progress: "pause" }),
    resetSearching: () => set({ progress: "reset", doneCount: 0 }),
    markSearchingDone: () =>
      set((state) => {
        if (useData.getState().algorithm === searchingAlgorithms.length) {
          if (state.doneCount === searchingAlgorithms.length - 1) {
            return { doneCount: 0, progress: "done" };
          } else return { doneCount: state.doneCount + 1 };
        } else return { progress: "done" };
      }),
    setSpeed: (speed) =>
      set(() => {
        return { compareTime: 1500 / speed, speed };
      }),
  }))
);

export const useData = create(
  devtools((set) => ({
    algorithm: 0,
    searchingArray: searchingArray,
    searchElement: 0,

    setSortingArray: (array) => set({ searchingArray: array }),
    setAlgorithm: (idx) => set({ algorithm: idx }),
  }))
);
