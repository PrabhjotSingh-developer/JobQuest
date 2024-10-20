import React from "react";
import { IoSearch } from "react-icons/io5";
const HeroSec = () => {
  return (
    <div className="text-center bg-red-500 py-20 md:px-20 px-4">
      <h2 className="text-center text-4xl font-bold bg-yellow-50 w-[fit-content] mx-auto px-4 py-3 rounded-md">
        No 1 Job Hunt Website
      </h2>

      <h2 className="text-center text-4xl md:text-5xl font-bold mt-5 text-white ">
        Search, Apply & <br />{" "}
        <span className="text-4xl md:text-5xl">Get Your Dream Job</span>
      </h2>

      <p className="mt-5 text-white font-medium text-center md:px-10  ">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam
        facere voluptatibus consequatur laudantium totam vel dolorem molestias,
        minima eaque aliquam recusandae. Praesentium, debitis deleniti quam
        nihil iusto mollitia optio. Repellat, eos necessitatibus. Ex minus
        deserunt doloribus molestiae?s nisi aliquam quaerat dolores tempore
        aperiam iusto molestiae?{" "}
      </p>
      <div className="border-2 md:w-[40%] bg-white mx-auto mt-6 flex rounded-md">
           <input type="text" name="" id=""  className="bg-transparent w-[90%] outline-none h-[30px]" placeholder="Enter Your Dream Job Name"/>
            <button className="bg-black text-white w-[10%] h-[30px] flex items-center justify-center"><IoSearch/></button>
      </div>
    </div>
  );
};

export default HeroSec;
