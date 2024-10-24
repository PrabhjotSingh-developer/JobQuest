import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaStar ,FaArrowRight,FaArrowLeft} from "react-icons/fa";
const CategoryCarousel = () => {
  const catCar = [
    "Frontend Devloper",
    "Backend Developer",
    "Full Stack Developer",
    "Devops Engineer",
    "Data Science",
    "Ui/Ux designer",
  ];
  const [slide,setSlide] = useState(0)
  function clickhandler (e){

    e.preventDefault()
   
     const item = document.querySelector(".maindiv");
    const btn = e.target.value;
    console.log(btn)
    const size = window.screen.width;
  
    
    if(btn === "Right" && size > 540 ) 
    {
      if(slide<2)
        {
        setSlide(slide+1);
        item.style.transition = ".5s linear"
        console.log(slide)
        item.style.transform = `translateX(${slide==0?"-800px":-((slide+1)*800)+"px"})`
      }
      else
      {
          setSlide(0);
          item.style.transition = "none"
          item.style.transform = `translateX(0px)`
          
      }
    }
    else 
    {
      if(slide>0 )
        {
          item.style.transition = ".5s linear"
         
          setSlide(slide-1);
          item.style.transform = `translateX(${slide === 1? "0px":(slide-1)*-800+"px"})`
      }
      else
      {
        item.style.transition = "none"
        item.style.transform = `translateX(${-1600}px)`
        setSlide(2);
          
      }
    }
  
       
  }
  return (
    <div className="w-[100%] mt-4 overflow-hidden" >
       <h1 className="text-2xl font-bold text-center my-4">Job Categories</h1>
      <div className="w-[800px] overflow-x-hidden flex justify-evenly  mx-auto md:h-[100px] items-center">
        <span className="md:absolute left-2  cursor-pointer hidden md:flex" onClick={clickhandler} name={"Left"} ><FaArrowLeft /></span>
        <div className="w-[100%]  px-[20px] overflow-scroll h-[100%] flex items-center " style={{scrollbarWidth:"none"}}>

          <div className="maindiv   md:relative flex md:flex-row flex-col gap-5 md:gap-10 items-center justify-center" >
            {catCar.map((item, index) => (

              <div className={`sliderItems md:absolute static flex  w-[100%]  md:w-[300px]  `}   style={{ left: `${index * 400}px` }}>
                
               <span><FaStar/></span> <NavLink className={"font-semibold"}>{item}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <span className="md:absolute right-2  cursor-pointer hidden md:flex" onClick={clickhandler} name={"Right"}><FaArrowRight /></span>
      </div>
    </div>
  );
};

export default CategoryCarousel;
