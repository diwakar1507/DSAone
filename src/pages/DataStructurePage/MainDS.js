import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getCourses } from "./Data";

const MainDS = () => {
  const Courses = getCourses();
  return (
    <div className="bg-dark-green text-l text-gray82 w-full h-screen overflow-hidden">
      <div className="pl-10 border-b-2 border-stone-700 p-5 text-4xl cursor-pointer text-white">
        <Link to={`/`}>DSA one</Link>
      </div>
      <div className="flex h-full">
        <div className="border-r-2 border-stone-700 w-1/6 h-full p-4 pt-10 overflow-x-auto shrink-0">
          {Courses.map((course) => (
            <Link
              className="ml-6"
              to={`/DataStructure/${course.index}`}
              key={course.index}>
              {course.index}. {course.name}
            </Link>
          ))}
        </div>
        <div className="overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDS;
