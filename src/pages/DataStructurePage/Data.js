import ArrayDS from "./Courses/Array";
import LinkedList from "./Courses/LinkedList";
import arrayCard from "../../img/DataStructure/Array/ArrayCard.svg";
import linkedListCard from "../../img/DataStructure/Linked List/LinkedListCard.svg";
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
    }
  ];
  
  export function getCourses() {
    return Courses;
  }

  export function getCourse(number) {
    return Courses.find(
      course => course.index === number
    ).page;
  }