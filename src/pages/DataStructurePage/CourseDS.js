import React from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "./Data";

const CourseDS = () => {
  let params = useParams();
  const Course = getCourse(parseInt(params.courseID, 10));

  return (
    <div className="bg-primary-1 pt-10">
      <Course />
    </div>
  );
};

export default CourseDS;
