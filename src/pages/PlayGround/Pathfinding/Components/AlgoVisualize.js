import React, { useEffect, useState } from "react";
import Node from "./Node/node";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../PathFindingAlgos/dijkstra";
import { getGridWithNewWall, getInitialGrid, useData } from "../Common/store";

const AlgoVisualize = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  useEffect(() => {
    const initGrid = getInitialGrid();
    setGrid(initGrid);
    return () => {};
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = getGridWithNewWall(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getGridWithNewWall(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`${node.row} : ${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`${node.row} : ${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualize = () => {
    const start = grid[useData.getState().yStart][useData.getState().xStart];
    const finish = grid[useData.getState().yFinish][useData.getState().xFinish];
    const visitedNodesInOrder = dijkstra(grid, start, finish);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finish);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <>
      <button onClick={() => visualize()}>Try Me!</button>
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlgoVisualize;
