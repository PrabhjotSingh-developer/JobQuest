import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify'
import { USER_API_END_POINT } from "../../utils/Constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../Redux/authSlice.js";
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector(store=>store.authSlice)
  
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async(e) =>{
    e.preventDefault()

    for(let key in input)
      {
          
          if(input[key]==="")
          { 
              toast.error("All Fields are required ");
              return 
          }
      
      }
      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
        });
        
        toast.success("Login Successfull")
        if(res.data.success)
           navigate("/")
  
      } catch (error) {

        toast.error(error.response.data.message)
         console.log(error)
      } finally{
        dispatch(setLoading(false));

      }
  
  }
  return (
    <div className="flex items-center  justify-center mt-7 sm:mt-12 lg:mt-8">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex  justify-center  flex-col gap-4 border-2 w-[95%] md:w-[80%] lg:w-[40%] border-gray-300 rounded-[10%] py-10 px-10 md:px-36"
      >
        <div>
          <h1 className="text-4xl">Login Now</h1>
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            className="outline-none border-2 border-gray-700 px-1"
            placeholder="abc@gmail.com"
            value={input.email}
            onChange={changeEventHandler}
          />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="outline-none border-2 border-gray-700 px-1"
            placeholder="Enter Password"
            value={input.password}
            onChange={changeEventHandler}
          />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="">Select Role</label>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <label htmlFor="student">student</label>
              <input
                type="radio"
                name="role"
                id="student"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="recruiter">Recruiter</label>
              <input
                type="radio"
                name="role"
                id="recruiter"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value={`${loading ? "Loading ...":"Login"}`}
            className="bg-blue-700 text-white px-5 py-2 rounded-[20px] cursor-pointer mt-5"
          />
        </div>
        <div>
          <span>
            {" "}
            New to Website ?{" "}
            <Link to="/signup" className="text-blue-900">
              Register Here
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
