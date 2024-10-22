import React from "react";
import { NavLink } from "react-router-dom";
const CategoryCarousel = () => {
  const catCar = [
    "Frontend Devloper",
    "Backend Developer",
    "Full Stack Developer",
    "Devops Engineer",
    "Data Science",
    "Ui/Ux designer",
  ];
  return (
    <div className="w-[100%] mt-4">
      <div className="w-[800px] overflow-x-hidden flex justify-center mx-auto h-[100px] bg-red-400">
        <div className="w-[100%]  px-[20px]">
          <div className="  relative flex gap-10 ">
            {catCar.map((item, index) => (

              <div className={`w-[300px] left-[${5*index}%]`}>
                {console.log(index)}
                <NavLink>{item}</NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
