import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const CategoryCarousel = () => {
  const catCar = [
    "Frontend Devloper",
    "Backend Developer",
    "Full Stack Developer",
    "Devops Engineer",
    "Data Science",
    "Ui/Ux designer",
  ];
  const [slide, setSlide] = useState(0);
  function nextClick() {
    const item = document.querySelector(".maindiv");

    const size = window.screen.width;

    if (slide < 2) {
      setSlide(slide + 1);
      item.style.transition = ".5s linear";
      console.log(slide);
      item.style.transform = `translateX(${
        slide == 0 ? "-800px" : -((slide + 1) * 800) + "px"
      })`;
    } else {
      setSlide(0);
      item.style.transition = "none";
      item.style.transform = `translateX(0px)`;
    }
  }
  function prevClick() {
    const item = document.querySelector(".maindiv");

    if (slide > 0) {
      item.style.transition = ".5s linear";

      setSlide(slide - 1);
      item.style.transform = `translateX(${
        slide === 1 ? "0px" : (slide - 1) * -800 + "px"
      })`;
    } else {
      item.style.transition = "none";
      item.style.transform = `translateX(${-1600}px)`;
      setSlide(2);
    }
  }
  return (
    <div className="w-[100%] mt-4 flex items-center justify-center ">
      <button onClick={prevClick}>
        prev
      </button>
      <div className="maindiv grid grid-cols-6 gap-10 overflow-scroll w-[80%] mx-auto   relative h-[100px] place-items-center" style={{scrollbarWidth:"none"}}>
        {catCar.map((item, index) => (
          <div className={`grid-items w-[300px] absolute flex items-center justify-center `} style={{left:`${index*300}px`}}>
            <Link>{item}</Link>
          </div>
        ))}
      </div>
      <button className="next">
        next
      </button>
    </div>
  );
};

export default CategoryCarousel;
