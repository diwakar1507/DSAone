import Sort from "../../img/Algo/Sort.svg"
import Bsearch from "../../img/Algo/Bsearch.svg"
import Lsearch from "../../img/Algo/Lsearch.svg"
import bubble from "../../img/Algo/bubble.svg"
import heap from "../../img/Algo/heap.svg"
import coin from "../../img/Algo/coin.svg"
import sort1 from "../../img/Algo/sort1.svg"
import sort2 from "../../img/Algo/sort2.svg"
import dfs from "../../img/Algo/dfs.svg"
import bfs from "../../img/Algo/bfs.svg"
import level from "../../img/Algo/level.svg"
import knapsack from "../../img/Algo/knapsack.svg"
import dijkstra from "../../img/Algo/dijkstra.svg"
import job from "../../img/Algo/job.svg"
import pm from "../../img/Algo/pm.svg"
import pm1 from "../../img/Algo/pm1.png"
import floyd from "../../img/Algo/floyd.svg"
import bellman from "../../img/Algo/bellman.svg"
import knapsack1 from "../../img/Algo/knapsack1.svg"
import lcs from "../../img/Algo/lcs.svg"
import Tsp from "../../img/Algo/Tsp.svg"
let Courses = [
    {
      name: "Bubble Sort",
      index: 1,
      img:bubble,
    },
    {
      name: "Insertion Sort",
      index: 2,
      img:coin,
    },
    {
      name: "Selection Sort",
      index: 3,
      img:sort1,
    },
    {
      name: "Heap Sort",
      index: 4,
      img:heap,
    },
    {
      name: "Quick Sort",
      index: 5,
      img:sort2,
    },
    {
      name: "Merge Sort",
      index: 6,
      img:Sort,
    },
    {
      name: "Binary Search",
      index: 7,
      img: Bsearch
    },
    {
      name: "Linear Search",
      index: 8,
      img:Lsearch
    },
    
      
  ];

  let Tree=[
     {
       name: "BFS",
       index:1,
       img:bfs
     },
     {
      name: "DFS",
      index:2,
      img:dfs
    },
    {
      name: "Level Order",
      index:3,
      img:level
    },
       
  ];
  let Greedy=[
    {
      name: "Knapsack",
      index:1,
      img:knapsack
    },
    {
     name: "Dijkstra",
     index:2,
     img:dijkstra
   },
   {
     name: "Job sequencing",
     index:3,
     img:job
   },
   {
    name:"Prims",
    index:4,
    img:pm
  },
  {
    name: "Kruskals",
    index:5,
    img:pm1
  },
     
      
 ];
 let Dynamic=[
  {
    name: "Floyd Warshall",
    index:1,
    img:floyd
  },
  {
   name: "Bellman Ford",
   index:2,
   img:bellman
 },
 {
   name: "0/1 Knapsack",
   index:3,
   img:knapsack1
 },
 {
  name: "Longest common Subsequence",
  index:4,
  img:lcs
},
{
  name: "Travelling Salesman",
  index:5,
  img:Tsp
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
    return Courses.find(
      course => course.index === number
    ).page;
  }
export function getCourseT(number) {
    return Tree.find(
      course => course.index === number
    ).page;
  }
  export function getCourseG(number) {
    return Greedy.find(
      course => course.index === number
    ).page;
  }
  export function getCourseD(number) {
    return Dynamic.find(
      course => course.index === number
    ).page;
  }

  

  