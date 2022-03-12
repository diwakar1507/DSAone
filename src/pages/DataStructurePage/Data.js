import ArrayDS from "./Courses/Array";
import LinkedList from "./Courses/LinkedList";

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
  ];
  
  export function getCourses() {
    return Courses;
  }

  export function getCourse(number) {
    return Courses.find(
      course => course.index === number
    ).page;
  }