
let Courses = [
   
  ];
  
  export function getCourses() {
    return Courses;
  }

  export function getCourse(number) {
    return Courses.find(
      course => course.index === number
    ).page;
  }