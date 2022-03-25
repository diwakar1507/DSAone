// Import react
import React, { useState, useEffect } from "react";
// Import stylesheets
import "./PathfindingVisualizer.css";
// Import algorithms
import * as dijkstra from "./algorithms/dijkstra";
import * as dfs from "./algorithms/dfs";
import * as bfs from "./algorithms/bfs";
import * as astar from "./algorithms/astar";
import * as recursiveDiv from "./algorithms/recursiveDivision";
import plus from "../../../img/Algo/plus.svg";
import minus from "../../../img/Algo/minus.svg";
// Import node components (vertices of the graph)
import Node from "./Node/Node";
// Import header and footer components
import Header from "./Header/header";
import { Link } from "react-router-dom";
// Define Grid constants
const rowLen = 29;
const colLen = 59;
// Define Animation Delay constants
const ANIMATION_INSTANT = 0;
const ANIMATION_FAST = 5;
const ANIMATION_AVG = 10;
const ANIMATION_SLOW = 20;
const ANIMATION_SLOWEST = 30;
let speed = 30;
// Define start/end node starting positions
let startRow = 14; // 15
let startCol = 14;
let endRow = 14;
let endCol = 45;
// Define algorithm constants
const DIJKSTRAS = "Dijkstra's";
const DFS = "DFS";
const BFS = "BFS";
const ASTAR = "A* Search";

const PathfindingVisualizer = (props) => {
  const [Grid, setGrid] = useState([]);// 2-D Grid representing graph
  const [mouseIsPressed, setMouseIsPressed] = useState(false); // Boolean to indicate mouse press
  const [isButtonDisabled, setIsButtonDisabled] = useState(false) // Boolean to toggle whether buttons are disabled
  const [isMouseDisabled, setIsMouseDisabled] = useState(false) // Boolean to toggle whether mouse is disabled
  const [moveStart, setMoveStart] = useState(false) // Boolean to indicate moving start node
  const [moveFinish, setMoveFinish] = useState(false)  // Boolean to indicate moving end node
  const [finishAnimations, setFinishAnimations] = useState(false)  // Boolean to indicate visualizations have completed
  const [algorithm, setAlgorithm] = useState("") // Name of the currently selected algorithm
  const [visualizeBtnText, setVisualizeBtnText] = useState("Visualize") // Used to change the name of the visualization button to selected algorithm
  const [isInstantAnims, setIsInstantAnims] = useState(false)  // Boolean to indicate instant animations (When adding walls and moving end/start node after visualizations are complete)
  const [animationDelay, setAnimationDelay] = useState(ANIMATION_AVG) // Animation delay between css visualization animations


  // Create Grid upon mounting
  useEffect(() => {
    // Create initial Grid and set to state
    const Grid = createGrid();
    setGrid(Grid);
  }, [])
  // Handles mouse click on node
  const handleMouseDown = (e, row, col, isStart, isFinish) => {
    if (isMouseDisabled) return;
    e.preventDefault();
    // Moving start/finish | toggle wall
    if (isStart) {
      setMoveStart(true);
    } else if (isFinish) {
      setMoveFinish(true);
    } else {
      let newGrid = toggleWall(Grid, row, col);
      // Reanimate instantly when wall is added after animations are finished
      if (finishAnimations) {
        newGrid = visualizeNoAnim(algorithm, newGrid);
      }
      setGrid(newGrid);
    }
    setMouseIsPressed(true);
  }
  // Handles mouse hold on node
  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    let newGrid = null;
    // Moving start/finish | toggling wall (reanimate if animations finished)
    if (moveStart) {
      newGrid = toggleStart(Grid, row, col);
      if (finishAnimations) {
        newGrid = visualizeNoAnim(algorithm, newGrid);
      }
    } else if (moveFinish) {
      newGrid = toggleFinish(Grid, row, col);
      if (finishAnimations) {
        newGrid = visualizeNoAnim(algorithm, newGrid);
      }
    } else {
      newGrid = toggleWall(Grid, row, col);
      if (finishAnimations) {
        newGrid = visualizeNoAnim(algorithm, newGrid);
      }
    }
    setGrid(newGrid);
  }
  const createGrid = () => {
    const Grid = [];
    for (let row = 0; row < rowLen; row++) {
      const currentRow = [];
      for (let col = 0; col < colLen; col++) {
        currentRow.push(createNode(col, row));
      }
      Grid.push(currentRow);
    }
    return Grid;
  };
  // Creates blank node
  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === startRow && col === startCol,
      isFinish: row === endRow && col === endCol,
      // General pathfinding variables
      dist: Infinity,
      isVisited: false,
      previousNode: null,
      // Class Toggles
      isWall: false,
      isShortestPath: false,
      isAnimated: false,
      // A Star* Variables
      fcost: Infinity,
      hcost: Infinity,
      gcost: Infinity,
      // Union-find Variables
      parent: null,
      rank: 0,
    };
  };
  // Disables state properties for mouse events
  const handleMouseUp = () => {
    // Turn off toggles regarding mouse events
    setMouseIsPressed(false);
    setMoveStart(false);
    setMoveFinish(false);

  }
  // Reset Grid (Includes walls, Node [all] classes and properties)
  const clearBoard = () => {
    // Select Grid element
    const gridElem = document.getElementsByClassName("Grid")[0];
    // Create initial Grid
    const newGrid = createGrid();
    // Remove all animation/nonanimation classes
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        gridElem.children[i].children[j].classList.remove(
          "node-visited-animate"
        );
        gridElem.children[i].children[j].classList.remove(
          "node-shortest-path-animate"
        );
        gridElem.children[i].children[j].classList.remove("node-wall-animate");
        gridElem.children[i].children[j].classList.remove("node-visited");
        gridElem.children[i].children[j].classList.remove("node-shortest-path");
        gridElem.children[i].children[j].classList.remove("node-wall");
      }
    }
    // Set clear Grid and turn off finished animation toggles
    setGrid(newGrid);
    setFinishAnimations(false);
    setIsInstantAnims(false);

  }
  // Reset Grid (Includes Node [all] classes and properties)
  const clearNodeClasses = () => {
    // Select Grid element
    const gridElem = document.getElementsByClassName("Grid")[0];
    // Clear Grid by creating initial Grid
    const newGrid = Grid.slice();
    // Remove all animation/nonanimation classes and reset all node properties
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        gridElem.children[i].children[j].classList.remove(
          "node-visited-animate"
        );
        gridElem.children[i].children[j].classList.remove(
          "node-shortest-path-animate"
        );
        gridElem.children[i].children[j].classList.remove("node-wall-animate");
        gridElem.children[i].children[j].classList.remove("node-visited");
        gridElem.children[i].children[j].classList.remove("node-shortest-path");
        newGrid[i][j].dist = Infinity;
        newGrid[i][j].isVisited = false;
        newGrid[i][j].previousNode = null;
        newGrid[i][j].isInPQ = false;
        newGrid[i][j].isAnimated = false;
        newGrid[i][j].isShortestPath = false;
        newGrid[i][j].fcost = Infinity;
        newGrid[i][j].gcost = Infinity;
        newGrid[i][j].hcost = Infinity;
      }
    }
    setGrid(newGrid);
  }
  // Reset Grid (Includes Node [animation] classes and properties)
  const clearAnimations = (newGrid) => {
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        //Reset Node properties of all nodes
        newGrid[i][j].dist = Infinity;
        newGrid[i][j].isVisited = false;
        newGrid[i][j].previousNode = null;
        newGrid[i][j].isInPQ = false;
        newGrid[i][j].isShortestPath = false;
        newGrid[i][j].isAnimated = false;
        newGrid[i][j].fcost = Infinity;
        newGrid[i][j].gcost = Infinity;
        newGrid[i][j].hcost = Infinity;
        //Reset animation classes in entire Grid
        if (!isInstantAnims) {
          gridElem.children[i].children[j].classList.remove(
            "node-visited-animate"
          );
          gridElem.children[i].children[j].classList.remove(
            "node-shortest-path-animate"
          );
          gridElem.children[i].children[j].classList.remove(
            "node-wall-animate"
          );
        }
      }
    }
  }
  // Dijkstra's algorithm (With animations)
  const dijkstraAnimations = () => {
    // Disable mouse and buttons
    setIsButtonDisabled(true);
    setIsMouseDisabled(true);
    setFinishAnimations(true);
    setMouseIsPressed(false);
    // Clear node [all] classes and properties
    clearNodeClasses();
    // Graph, node, and arrays from dijkstra's algorithm for animation
    const newGrid = Grid.slice();
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = true;
    const [visitedOrder, nodesInShortestPathOrder] = dijkstra.dijkstraAlgorithm(
      newGrid,
      animations,
      startNode,
      endNode
    );
    // Animations for visiting nodes
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < visitedOrder.length; i++) {
      const { row, col } = visitedOrder[i];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-visited-animate"
        );
      }, i * animationDelay);
    }
    // Animations for shortest path
    for (let j = 0; j < nodesInShortestPathOrder.length; j++) {
      const { row, col } = nodesInShortestPathOrder[j];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-shortest-path-animate"
        );
      }, (visitedOrder.length + j) * animationDelay);
    }
    // Reenable mouse and buttons after animations are finished
    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsMouseDisabled(false);
    }, (visitedOrder.length + nodesInShortestPathOrder.length + 1) * animationDelay);
    // Set new Grid
    setGrid(newGrid);
  }
  // Dijkstra's algorithm (No animations)
  const dijkstraNoAnim = (newGrid) => {
    clearAnimations(newGrid);
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = false;
    // Run dijkstra's with temp Grid, no animations, start node, and ending node
    dijkstra.dijkstraAlgorithm(newGrid, animations, startNode, endNode);
    setIsInstantAnims(true);
    return newGrid;
  }
  // DFS Algorithm (With animations)
  const dfsAnimations = () => {
    // Disable mouse and buttons
    setIsButtonDisabled(true);
    setIsMouseDisabled(true);
    setFinishAnimations(true);
    setMouseIsPressed(false);
    // Clear node [all] classes and properties
    clearNodeClasses();
    // Graph, node, and arrays from dijkstra's algorithm for animation
    const newGrid = Grid.slice();
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = true;
    const visitedOrder = dfs.dfsAlgorithm(
      newGrid,
      animations,
      startNode,
      endNode
    );
    // Animations for visiting nodes
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < visitedOrder.length; i++) {
      const { row, col } = visitedOrder[i];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-visited-animate"
        );
      }, i * animationDelay);
    }
    let pathLength = 0;
    if (endNode.isVisited) {
      let node = startNode;
      while (node !== null) {
        const { row, col } = node;
        setTimeout(() => {
          gridElem.children[row].children[col].classList.add(
            "node-shortest-path-animate"
          );
        }, (visitedOrder.length + pathLength) * animationDelay);
        node = node.previousNode;
        pathLength++;
      }
    }
    // Reenable mouse and buttons after animations are finished
    setTimeout(() => {
      setIsButtonDisabled(false); setIsMouseDisabled(false);
    }, (visitedOrder.length + pathLength + 1) * animationDelay);
    setGrid(newGrid);
  }
  // DFS Algorithm (No animations)
  const dfsNoAnim = (newGrid) => {
    clearAnimations(newGrid);
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = false;
    // Run dijkstra's with temp Grid, no animations, start node, and ending node
    dfs.dfsAlgorithm(newGrid, animations, startNode, endNode);
    // Draw shortest path
    if (endNode.isVisited) {
      let node = startNode;
      while (node !== null) {
        const { row, col } = node;
        newGrid[row][col].isShortestPath = true;
        node = node.previousNode;
      }
    }
    setIsInstantAnims(true);
    return newGrid;
  }
  // BFS Algorithm (With animations)
  const bfsAnimations = () => {
    // Disable mouse and buttons
    setIsButtonDisabled(true);
    setIsMouseDisabled(true);
    setFinishAnimations(true);
    setMouseIsPressed(false);
    // Clear node [all] classes and properties
    clearNodeClasses();
    // Graph, node, and arrays from dijkstra's algorithm for animation
    const newGrid = Grid.slice();
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = true;
    const [visitedOrder, nodesInShortestPathOrder] = bfs.bfsAlgorithm(
      newGrid,
      animations,
      startNode,
      endNode
    );
    // Animations for visiting nodes
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < visitedOrder.length; i++) {
      const { row, col } = visitedOrder[i];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-visited-animate"
        );
      }, i * animationDelay);
    }
    // Animations for shortest path
    for (let j = 0; j < nodesInShortestPathOrder.length; j++) {
      const { row, col } = nodesInShortestPathOrder[j];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-shortest-path-animate"
        );
      }, (visitedOrder.length + j) * animationDelay);
    }
    // Reenable mouse and buttons after animations are finished
    setTimeout(() => {
      setIsButtonDisabled(false); setIsMouseDisabled(false);
    }, (visitedOrder.length + nodesInShortestPathOrder.length + 1) * animationDelay);
    setGrid(newGrid);
  }
  // DFS Algorithm (No animations)
  const bfsNoAnim = (newGrid) => {
    clearAnimations(newGrid);
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = false;
    // Run dijkstra's with temp Grid, no animations, start node, and ending node
    bfs.bfsAlgorithm(newGrid, animations, startNode, endNode);
    setIsInstantAnims(true);
    return newGrid;
  }
  // A* Algorthim (With animations)
  const aStarAnimations = () => {
    // Disable mouse and buttons
    setIsButtonDisabled(true);
    setIsMouseDisabled(true);
    setFinishAnimations(true);
    setMouseIsPressed(false);
    // Clear node [all] classes and properties
    clearNodeClasses();
    // Graph, node, and arrays from dijkstra's algorithm for animation
    const newGrid = Grid.slice();
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = true;
    const [visitedOrder, nodesInShortestPathOrder] = astar.aStarAlgorithm(
      newGrid,
      animations,
      startNode,
      endNode
    );
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < visitedOrder.length; i++) {
      const { row, col } = visitedOrder[i];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-visited-animate"
        );
      }, i * animationDelay);
    }
    // Animations for shortest path
    for (let j = 0; j < nodesInShortestPathOrder.length; j++) {
      const { row, col } = nodesInShortestPathOrder[j];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add(
          "node-shortest-path-animate"
        );
      }, (visitedOrder.length + j) * animationDelay);
    }
    // Reenable mouse and buttons after animations are finished
    setTimeout(() => {
      setIsButtonDisabled(false); setIsMouseDisabled(false);
    }, (visitedOrder.length + nodesInShortestPathOrder.length + 1) * animationDelay);
    // Set new Grid
    setGrid(newGrid);
  }
  // A* Algorithm (No animations)
  const aStarNoAnim = (newGrid) => {
    clearAnimations(newGrid);
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    const animations = false;
    // Run dijkstra's with temp Grid, no animations, start node, and ending node
    astar.aStarAlgorithm(newGrid, animations, startNode, endNode);
    setIsInstantAnims(true);
    return newGrid;
  }
  // Recursive Division Algorithm (Wall algorithm)
  const recursiveDivisionAnimation = (mode) => {
    // Disable mouse and buttons
    setIsButtonDisabled(true);
    setIsMouseDisabled(true);
    setMouseIsPressed(false);
    // Clear node classes
    clearNodeClasses();
    // Turn off instant animations after placing walls, moving start/end nodes
    setFinishAnimations(false);
    // Graph, node, and arrays from dijkstra's algorithm for animation
    const newGrid = Grid.slice();
    // Clear walls
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[0].length; j++) {
        newGrid[i][j].isWall = false;
      }
    }
    const startNode = newGrid[startRow][startCol];
    const endNode = newGrid[endRow][endCol];
    let wallVisitedOrder = recursiveDiv.recursiveDivisionAlgorithm(
      newGrid,
      startNode,
      endNode,
      mode
    );
    const gridElem = document.getElementsByClassName("Grid")[0];
    for (let i = 0; i < wallVisitedOrder.length; i++) {
      const { row, col } = wallVisitedOrder[i];
      setTimeout(() => {
        gridElem.children[row].children[col].classList.add("node-wall-animate");
      }, i * animationDelay);
    }
    console.log(newGrid[0][1]);
    // Reenable mouse and buttons after animations are finished
    setTimeout(() => {
      setIsButtonDisabled(false); setIsMouseDisabled(false);
      clearNodeClasses();
    }, wallVisitedOrder.length * animationDelay + 500);
    setGrid(newGrid);
    return;
  }
  // Toggles starting node prop of node hovered by mouse
  const toggleStart = (Grid, row, col) => {
    if (Grid[row][col].isFinish || Grid[row][col].isWall) return Grid;
    const newGrid = Grid.slice();
    newGrid[startRow][startCol].isStart = false;
    newGrid[row][col].isStart = !newGrid[row][col].isStart;
    startCol = col;
    startRow = row;
    return newGrid;
  }
  // Toggles finish node prop of node hovered by mouse
  const toggleFinish = (Grid, row, col) => {
    if (Grid[row][col].isStart || Grid[row][col].isWall) return Grid;
    const newGrid = Grid.slice();
    newGrid[endRow][endCol].isFinish = false;
    newGrid[row][col].isFinish = !newGrid[row][col].isFinish;
    endCol = col;
    endRow = row;
    return newGrid;
  };
  // Toggles wall node prop of node hovered by mouse
  const toggleWall = (Grid, row, col) => {
    if (Grid[row][col].isStart || Grid[row][col].isFinish) return Grid;
    const newGrid = Grid.slice();
    newGrid[row][col].isWall = !newGrid[row][col].isWall;
    return newGrid;
  };
  // Handles visualization button click with animations
  const visualize = (algorithm) => {
    switch (algorithm) {
      case DIJKSTRAS:
        dijkstraAnimations();
        break;
      case ASTAR:
        aStarAnimations();
        break;
      case DFS:
        dfsAnimations();
        break;
      case BFS:
        bfsAnimations();
        break;
      default:
        break;
    }
  }
  // Handles visualization with wall addition and start/end node moving (No animations)
  const visualizeNoAnim = (algorithm, newGrid) => {
    switch (algorithm) {
      case DIJKSTRAS:
        return dijkstraNoAnim(newGrid);
      case ASTAR:
        return aStarNoAnim(newGrid);
      case DFS:
        return dfsNoAnim(newGrid);
      case BFS:
        return bfsNoAnim(newGrid);
      default:
        break;
    }
  }
  // Handles cycling animation delay button click
  const cycleSpeed = () => {
    if (animationDelay === ANIMATION_FAST) {
      setAnimationDelay(ANIMATION_AVG);
      speed = 30;
    } else if (animationDelay === ANIMATION_AVG) {
      setAnimationDelay(ANIMATION_SLOW);
      speed = 20;
    } else if (animationDelay === ANIMATION_SLOW) {
      setAnimationDelay(ANIMATION_SLOWEST);
      speed = " MIN";
    }
    else if (animationDelay === ANIMATION_INSTANT) {
      setAnimationDelay(ANIMATION_FAST);
      speed = 40;
    }
  }
  const IcycleSpeed = () => {
    if (animationDelay === ANIMATION_SLOW) {
      setAnimationDelay(ANIMATION_AVG);
      speed = 30;
    } else if (animationDelay === ANIMATION_SLOWEST) {
      setAnimationDelay(ANIMATION_SLOW);
      speed = 20;
    }

    else if (animationDelay === ANIMATION_FAST) {
      setAnimationDelay(ANIMATION_INSTANT);
      speed = " MAX";
    }
    else if (animationDelay === ANIMATION_AVG) {
      setAnimationDelay(ANIMATION_FAST);
      speed = 40;
    }
  }

  return (
    <div className="bg-primary-1">
      <div className="flex text-primary-3 bg-primary-2">
        <Link to="/"><p className="text-4xl py-5 pr-44 pl-5">DSAone</p></Link>
        <p className="text-5xl py-5 pl-40 ">PathFinding Visualizer</p>

      </div>


      <Header />


      <div className=" bg-primary-1 relative">
        <div className=" text-xl text-white mb-4 py-5 backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">

          <div className=" px-10 flex justify-between">
            <div className="dropdown p-1 text-2xl hover:border-b-2 hover:text-yellow-100  cursor-pointer hover: border-b-primary-3">
              <p>Maze</p>
              <div className="dropdown-content text-xl ">
                <button
                  className="dropdown-btn bg-slate-500 text-yellow-100 rounded-t-xl w-48 mt-5  hover:bg-slate-600 text-xl p-1 border-y-2"
                  onClick={() => {
                    recursiveDivisionAnimation("deterministic");
                  }}
                  disabled={isButtonDisabled}
                >
                  Recursive Divison
                </button>
                <button
                  className="dropdown-btn bg-slate-500 text-yellow-100 hover:bg-slate-600 text-xl p-1 border-b-2"
                  onClick={() => {
                    recursiveDivisionAnimation("horizontal");
                  }}
                  disabled={isButtonDisabled}
                >
                  Horizontal-skew
                </button>
                <button
                  className="dropdown-btn bg-slate-500 text-yellow-100 rounded-b-xl hover:bg-slate-600 text-xl p-1 border-b-2"
                  onClick={() => {
                    recursiveDivisionAnimation("vertical");
                  }}
                  disabled={isButtonDisabled}
                >
                  Vertical-skew
                </button>
              </div>
            </div>

            <button
              className=" hover:border-b-2 hover: border-b-primary-3 hover:text-yellow-100  p-1 "
              onClick={() => {
                clearNodeClasses();
                setAlgorithm(DIJKSTRAS);
                setVisualizeBtnText("Visualize " + DIJKSTRAS,);
                setFinishAnimations(false);
                setIsInstantAnims(false);
              }}
              disabled={isButtonDisabled}
            >
              Dijkstra's
            </button>
            <button
              className="hover:border-b-2 p-1 hover:text-yellow-100  hover: border-b-primary-3"
              onClick={() => {
                clearNodeClasses();
                setAlgorithm(ASTAR);
                setVisualizeBtnText("Visualize " + "A*");
                setFinishAnimations(false);
                setIsInstantAnims(false);
              }}
              disabled={isButtonDisabled}
            >
              A*(Euclidean)
            </button>
            <button
              className="hover:border-b-2 p-1 hover:text-yellow-100  hover: border-b-primary-3"
              onClick={() => {
                clearNodeClasses();
                setAlgorithm(DFS);
                setVisualizeBtnText("Visualize " + DFS);
                setFinishAnimations(false);
                setIsInstantAnims(false);
              }}
              disabled={isButtonDisabled}
            >
              DFS
            </button>
            <button
              className="hover:border-b-2 p-1  hover:text-yellow-100  hover: border-b-primary-3"
              onClick={() => {
                clearNodeClasses();
                setAlgorithm(BFS);
                setVisualizeBtnText("Visualize " + BFS);
                setFinishAnimations(false);
                setIsInstantAnims(false);
              }}
              disabled={isButtonDisabled}
            >
              BFS
            </button>
            <button
              className=" bg-primary-3 px-3 rounded-xl  hover:bg-orange-600 text-xl p-1 border-b-2"
              onClick={() => {
                if (algorithm !== "") {
                  visualize(algorithm);
                } else {
                  setVisualizeBtnText("Select an Algorithm");
                }
              }}
              disabled={isButtonDisabled}
            >
              {visualizeBtnText}
            </button>
            <button
              className=" bg-primary-3 px-3 rounded-xl  hover:bg-orange-600 text-xl p-1 border-b-2"
              onClick={() => clearBoard()}
              disabled={isButtonDisabled}
            >
              Clear Board
            </button>
            <button
              className=" bg-primary-3 px-3 rounded-xl hover:bg-orange-600 text-xl p-1 border-b-2"
              onClick={() => {
                clearNodeClasses();
                setFinishAnimations(false);
                setIsInstantAnims(false);
              }}
              disabled={isButtonDisabled}
            >
              Reset Animations
            </button>
            <div className="flex">
              <img className="h-10 w-10 cursor-pointer" src={plus} onClick={() => IcycleSpeed()} />

              <button
                className="{speedBtnClass} bg-transparent px-3 rounded-xl text-yellow-300  hover:text-white text-xl p-1 border-b-2"
                onClick={() => cycleSpeed()}
                disabled={isButtonDisabled}
              >
                Speed:{speed}
              </button>
              <img className="h-10 w-10 cursor-pointer" src={minus} onClick={() => cycleSpeed()} />
            </div>


          </div>
        </div>

      </div>
      <div className="Grid">
        {Grid.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const {
                  row,
                  col,
                  isStart,
                  isFinish,
                  isWall,
                  isVisited,
                  isShortestPath,
                  isAnimated,
                  fcost,
                } = node;
                return (
                  <Node
                    key={nodeIdx}
                    row={row}
                    col={col}
                    isStart={isStart}
                    isFinish={isFinish}
                    isWall={isWall}
                    isVisited={isVisited}
                    isShortestPath={isShortestPath}
                    isAnimated={isAnimated}
                    fcost={fcost}
                    onMouseDown={(e) =>
                      handleMouseDown(e, row, col, isStart, isFinish)
                    }
                    onMouseEnter={() => handleMouseEnter(row, col)}
                    onMouseUp={handleMouseUp}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );


  // Creates initial Grid filled with nodes

}
export default PathfindingVisualizer;