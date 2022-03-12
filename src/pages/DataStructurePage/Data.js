import ArrayDS from "./Courses/Array";
import LinkedList from "./Courses/LinkedList";
import arrayCard from "../../img/DataStructure/Array/ArrayCard.svg";
import linkedListCard from "../../img/DataStructure/LinkedList/LinkedListCard.svg";
import stackCard from "../../img/DataStructure/Stack/StackCard.svg"
import queueCard from "../../img/DataStructure/Queue/QueueCard.svg"
import treeCard from "../../img/DataStructure/Tree/TreeCard.svg"
import BSTCard from "../../img/DataStructure/BST/BSTCard.svg"
import HeapCard from "../../img/DataStructure/Heap/HeapCard.svg"
import TreeDS from "./Courses/Tree";
import StackDS from "./Courses/Stack";
import QueueDS from "./Courses/Queue";
import BSTDS from "./Courses/BST";
import HeapDS from "./Courses/Heap";
import GraphDS from "./Courses/Graph";

let Courses = [
    {
      name: "Array",
      index: 1,
      page: ArrayDS,
      img: arrayCard
    },
    {
      name: "Linked List",
      index: 2,
      page: LinkedList,
      img: linkedListCard
    },
    {
      name: "Stack",
      index: 3,
      page: StackDS,
      img: stackCard
    },
    {
      name: "Queue",
      index: 4,
      page: QueueDS,
      img: queueCard
    },
    {
      name: "Tree",
      index: 5,
      page: TreeDS,
      img: treeCard
    },
    {
      name: "BST",
      index: 6,
      page: BSTDS,
      img: BSTCard
    },
    {
      name: "Heap",
      index: 7,
      page: HeapDS,
      img: HeapCard
    },
    {
      name: "Graph",
      index: 8,
      page: GraphDS
    },
  ];
  
  export function getCourses() {
    return Courses;
  }

  export function getCourse(number) {
    return Courses.find(
      course => course.index === number
    ).page;
  }