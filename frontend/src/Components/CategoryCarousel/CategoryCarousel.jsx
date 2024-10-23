import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
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
    const btn = e.target.innerHTML;
    const size = window.screen.width;
    const allItems = document.querySelectorAll(".sliderItems");
    console.log(allItems)
    
    if(btn === "Right" && size > 540 ) 
    {
      if(slide<3)
        {
        setSlide(slide+1);
        item.style.transition = ".5s linear"
        
        item.style.transform = `translateX(${slide==0?"-800px":-slide*800+"px"})`
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
          console.log(slide)
          item.style.transform = `translateX(${slide === 1? "0px":(slide-1)*-800+"px"})`
          setSlide(slide-1);
      }
      else
      {
          setSlide(3);
          item.style.transition = "none"
          item.style.transform = `translateX(${-1600}px)`
          
      }
    }
  
       
  }
  return (
    <div className="w-[100%] mt-4 overflow-hidden" >
      <div className="w-[800px] overflow-x-hidden flex justify-center mx-auto h-[100px] items-center bg-red-400">
        <span className="absolute left-0 bg-green-500" onClick={clickhandler}>Left</span>
        <div className="w-[100%]  px-[20px] overflow-scroll h-[100%] flex items-center " style={{scrollbarWidth:"none"}}>

          <div className="maindiv   relative flex gap-10 items-center justify-center " >
            {catCar.map((item, index) => (

              <div className={`sliderItems absolute  flex justify-center sm:w-[300px] w-[100%]`}   style={{ left: `${index * 400}px` }}>
                
                <NavLink>{item}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <span className="absolute right-0 bg-green-500" onClick={clickhandler}>Right</span>
      </div>
    </div>
  );
};

export default CategoryCarousel;
