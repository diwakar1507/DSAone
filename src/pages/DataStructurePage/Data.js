import ArrayDS from "./Courses/Array";

let Courses = [
    {
      name: "Array",
      index: 1,
      page: ArrayDS
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