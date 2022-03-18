import create from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { searchTime, searchingAlgorithms } from "./config";

export const useControls = create(
  subscribeWithSelector(
    devtools((set) => ({
      progress: "reset",
      speed: 3,
      searchTime: searchTime,
      startSearching: () => set({ progress: "start" }),
      pauseSearching: () => set({ progress: "pause" }),
      resetSearching: () => set({ progress: "reset" }),
      markSearchingDone: () => set({ progress: "done" }),
      setSpeed: (speed) =>
        set(() => {
          return { searchTime: 1500 / speed, speed };
        }),
    }))
  )
);

export const useData = create(
  subscribeWithSelector(
    devtools((set) => ({
      algorithm: 0,
      row: 20,
      col: 50,
      xStart: 0,
      yStart: 0,
      xFinish: 37,
      yFinish: 18,

      setAlgorithm: (idx) => set({ algorithm: idx }),
      setGrid: (r, c) => set({ row: r, col: c }),
      setStartCoordinates: (x, y) => set({ xStart: x, yStart: y }),
      setFinishCoordinates: (x, y) => set({ xFinish: x, yFinish: y }),
    }))
  )
);

export const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < useData.getState().row; row++) {
    const currentRow = [];
    for (let col = 0; col < useData.getState().col; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

export const getGridWithNewWall = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart:
      row === useData.getState().yStart && col === useData.getState().xStart,
    isFinish:
      row === useData.getState().yFinish && col === useData.getState().xFinish,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
