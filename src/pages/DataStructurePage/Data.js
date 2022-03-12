import ArrayDS from "./Courses/Array";
import LinkedList from "./Courses/LinkedList";
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
      page: ArrayDS
    },
    {
      name: "Linked List",
      index: 2,
      page: LinkedList
    },
    {
      name: "Stack",
      index: 3,
      page: StackDS
    },
    {
      name: "Queue",
      index: 4,
      page: QueueDS
    },
    {
      name: "Tree",
      index: 5,
      page: TreeDS
    },
    {
      name: "BST",
      index: 6,
      page: BSTDS
    },
    {
      name: "Heap",
      index: 7,
      page: HeapDS
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