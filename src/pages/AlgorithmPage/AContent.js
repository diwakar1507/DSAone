import React from "react";
import { Link } from "react-router-dom";
import ViewCard from "../../Components/ViewCard";
import { getCourses } from "./Data";
const AContent = () => {
  const Courses = getCourses();
  return (
    <div className="bg-primary-1 min-h-screen max-h-full min-w-full relative">
      <div className="flex pt-24 justify-center">
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-20 pt-4">
            {Courses.map((course) => (
              <div key={course.index}>
                <Link
                  className="ml-6"
                  to={`/DataStructure/${course.index}`}
                  key={course.index}>
                  <ViewCard name={course.name} index={course.index} image={course.img}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AContent;
