import React, { useState } from "react";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="flex justify-between items-center px-10 py-5 h-[100%]">
      <div className="logo">
        <h2 className="text-2xl font-semibold">
          Job <span className="text-red-600">Quest</span>
        </h2>
      </div>
      <div className="menuLink items-center">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
      </div>
      {/* <div className="btns flex gap-5">
           <button>Login</button>
           <button>Sign Up</button>
      </div> */}

      <div className="avatar relative ">
        <div
          className="w-[45px] h-[45px] rounded-[50%] bg-black "
          onClick={() => setTimeout(() => setShowProfile(!showProfile), 200)}
        ></div>

        <div
          className={`links border-2 py-4  border-black absolute right-0  mt-4 px-4 w-[300px]  ${
            showProfile ? "transalate-x-[0%]" : "translate-x-[200%]"
          }`}
          style={{ transition: " .2s linear" }}
        >
          <div
            className="absolute top-2 right-2 cursor-pointer  "
            onClick={() => setTimeout(() => setShowProfile(!showProfile), 50)}
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
    </div>
  );
};

export default Navbar;
