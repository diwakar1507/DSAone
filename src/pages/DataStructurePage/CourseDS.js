import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "./Data";

const CourseDS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let params = useParams();
  const Course = getCourse(parseInt(params.courseID, 10));

  return (
    <div className="bg-primary-1 pt-10">
      <Course />
    </div>
  );
};

export default CourseDS;
