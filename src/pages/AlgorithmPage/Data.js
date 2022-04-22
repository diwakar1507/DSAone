import Sort from "../../img/Algo/Sort.svg";
import Bsearch from "../../img/Algo/Bsearch.svg";
import Lsearch from "../../img/Algo/Lsearch.svg";
import bubble from "../../img/Algo/bubble.svg";
import heap from "../../img/Algo/heap.svg";
import coin from "../../img/Algo/coin.svg";
import sort1 from "../../img/Algo/sort1.svg";
import sort2 from "../../img/Algo/sort2.svg";
import dfs from "../../img/Algo/dfs.svg";
import bfs from "../../img/Algo/bfs.svg";
import level from "../../img/Algo/level.svg";
import knapsack from "../../img/Algo/knapsack.svg";
import dijkstra from "../../img/Algo/dijkstra.svg";
import job from "../../img/Algo/job.svg";
import pm from "../../img/Algo/pm.svg";
import pm1 from "../../img/Algo/pm1.png";
import floyd from "../../img/Algo/floyd.svg";
import bellman from "../../img/Algo/bellman.svg";
import knapsack1 from "../../img/Algo/knapsack1.svg";
import Bubble from "./Courses/Sorting/Bubble";
import Selection from "./Courses/Sorting/Selection";
import Insertion from "./Courses/Sorting/Insertion";
import Quick from "./Courses/Sorting/Quick";
import Merge from "./Courses/Sorting/Merge";
import Heap from "./Courses/Sorting/Heap";
import Linear from "./Courses/Sorting/Linear";
import Binary from "./Courses/Sorting/Binary";
import Bfs from "./Courses/Tree/Bfs";
import Dfs from "./Courses/Tree/Dfs";
import Level from "./Courses/Tree/Level";
import Dijkstra from "./Courses/Greedy/Dijkstra";
import Knapsack from "./Courses/Greedy/Knapsack";
import Job from "./Courses/Greedy/Job";
import Prims from "./Courses/Greedy/Prims";
import Kruskals from "./Courses/Greedy/Kruskals";
import Knapsack1 from "./Courses/Dynamic/Knapsack1";
import FW from "./Courses/Dynamic/FW";
import BF from "./Courses/Dynamic/BF";

let Courses = [
  {
    name: "Bubble Sort",
    index: 1,
    img: bubble,
    page: Bubble,
  },
  {
    name: "Insertion Sort",
    index: 2,
    img: coin,
    page: Insertion,
  },
  {
    name: "Selection Sort",
    index: 3,
    img: sort1,
    page: Selection,
  },
  {
    name: "Heap Sort",
    index: 4,
    img: heap,
    page: Heap,
  },
  {
    name: "Quick Sort",
    index: 5,
    img: sort2,
    page: Quick,
  },
  {
    name: "Merge Sort",
    index: 6,
    img: Sort,
    page: Merge,
  },
  {
    name: "Binary Search",
    index: 7,
    img: Bsearch,
    page: Binary,
  },
  {
    name: "Linear Search",
    index: 8,
    img: Lsearch,
    page: Linear,
  },
];

let Tree = [
  {
    name: "BFS",
    index: 1,
    img: bfs,
    page: Bfs,
  },
  {
    name: "DFS",
    index: 2,
    img: dfs,
    page: Dfs,
  },
  {
    name: "Level Order",
    index: 3,
    img: level,
    page: Level,
  },
];
let Greedy = [
  {
    name: "Knapsack",
    index: 1,
    img: knapsack,
    page: Knapsack,
  },
  {
    name: "Dijkstra",
    index: 2,
    img: dijkstra,
    page: Dijkstra,
  },
  {
    name: "Job sequencing",
    index: 3,
    img: job,
    page: Job,
  },
  {
    name: "Prims",
    index: 4,
    img: pm,
    page: Prims,
  },
  {
    name: "Kruskals",
    index: 5,
    img: pm1,
    page: Kruskals,
  },
];
let Dynamic = [
  {
    name: "Floyd Warshall",
    index: 1,
    img: floyd,
    page: FW,
  },
  {
    name: "Bellman Ford",
    index: 2,
    img: bellman,
    page: BF,
  },
  {
    name: "0/1 Knapsack",
    index: 3,
    img: knapsack1,
    page: Knapsack1,
  },
];

export function getCourses() {
  return Courses;
}
export function getTree() {
  return Tree;
}
export function getGreedy() {
  return Greedy;
}
export function getDynamic() {
  return Dynamic;
}
export function getCourse(number) {
  return Courses.find((course) => course.index === number).page;
}
export function getCourseT(number) {
  return Tree.find((course) => course.index === number).page;
}
export function getCourseG(number) {
  return Greedy.find((course) => course.index === number).page;
}
export function getCourseD(number) {
  return Dynamic.find((course) => course.index === number).page;
}
