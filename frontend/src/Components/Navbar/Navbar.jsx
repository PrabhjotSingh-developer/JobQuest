import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenubar,setShowMenubar] = useState(false)
  const user =true;
  return (

    <div className={`flex justify-between items-center px-4 sm:px-7 md:px-10 py-5 bg-white z-10   ${showProfile ?"":""}  `} >
   
      <div className="logo flex items-center gap-4 relative">
      <div className="menuIcon sm:hidden">
           <GiHamburgerMenu onClick={()=>setShowMenubar(!showMenubar)}/>
      </div>
        <h2 className="text-2xl font-semibold">
          Job <span className="text-red-600">Quest</span>
        </h2>
      </div>
      <div className="menuLink items-center flex gap-8 ">
        <ul className={`flex sm:flex-row flex-col gap-5 absolute left-0 top-[9%] md:static bg-white sm:w-auto w-[100%] px-5 py-10 sm:py-0 h-[100vh] sm:h-auto ${showMenubar?"left-0":"left-[-100%]"}`} style={{transition:"left .2s"}} >
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        { !user &&
           <div className="btns flex gap-5">
           <button>Login</button>
           <button>Sign Up</button>
      </div>
        }
        
      </div>
    
 
     
 { user &&
     <div className="avatar relative ">
        <div
          className="w-[45px] h-[45px] rounded-[50%] bg-black "
          onClick={() =>setShowProfile(!showProfile)}
        ></div>

        <div
          className={`links border-2 py-4  border-black absolute right-0  mt-4 px-4 w-[300px] z-[-8] ${
            showProfile ? "top-[110%]" : "top-[-400%]"
          }`}
          style={{ transition: "top .2s linear" }}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer  "
            onClick={() =>setShowProfile(!showProfile)}
          >
            X
          </div>
          <h1 className="mt-5">Prabhjot Singh Mern stack</h1>
          <ul className="flex gap-2 flex-col mt-4">
            <li className="border-t-2 border-black cursor-pointer">
              My Profile
            </li>
            <li className="border-t-2 border-black cursor-pointer">
              {" "}
              Edit Profile
            </li>
            <li className="border-t-2 border-black cursor-pointer">Logout</li>
          </ul>
        </div>
      </div>
 }
   
    </div>
  );
};

export default Navbar;
