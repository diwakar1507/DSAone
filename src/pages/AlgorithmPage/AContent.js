import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ViewCard from "../../Components/AViewCard";
import { getCourses } from "./Data";

const AContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Courses = getCourses();
  
  return (
    <div className="bg-primary-1 min-h-screen max-h-full min-w-full overflow-hidden relative">
      <div className="flex pt-24 justify-center">
        <div className="p-4">
          <div className="text-4xl text-center mt-5 scale text-white mb-10">
      
            <div className="grid grid-cols-1 sm:grid-cols-2 text-xl text-left lg:grid-cols-4 gap-y-1 gap-x-20 pt-2">
              {Courses.map((course) => (
                <div key={course.index}>
                  <Link
                    className="ml-6"
                    to={`/Algorithm/${course.index}`}
                    key={course.index}>
                    <ViewCard
                      name={course.name}
                      index={course.index}
                      image={course.img}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <hr></hr>
          
        
          
        </div>
      </div>
    </div>
  );
};

export default AContent;
