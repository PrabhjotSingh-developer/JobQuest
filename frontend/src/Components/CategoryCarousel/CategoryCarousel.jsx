import React from 'react'
import { NavLink } from "react-router-dom";
const CategoryCarousel = () => {
    const catCar = ["Frontend Devloper","Backend Developer","Full Stack Developer","Devops Engineer","Data Science","Ui/Ux designer"];
  return (
    <div className='w-[100%] overflow-y-hidden'>
        <div className='w-[60%] mx-auto relative'>
                <div className='gap-10 flex  absolute'>
                       {
                        catCar.map((item,index)=>(<NavLink className="w-[fit-content]">{item}</NavLink>))
                       }
                </div>
        </div>
    </div>
  )
}

export default CategoryCarousel
