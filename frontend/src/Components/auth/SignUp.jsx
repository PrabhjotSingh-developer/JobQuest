import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/Constant";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios'
import { setLoading } from "../../Redux/authSlice";
const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector(store=>store.authSlice)
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    mobileNo: "",
    password: "",
    role: "",
    file: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    for(let key in input)
    {
       
        if(input[key]==="" && key !=="file")
        { 
          
            toast.error("All fields are required")       
            return 
                  
        }
        // console.log(input[key])
    }
    let formData = new FormData()
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("mobileNo",input.mobileNo);
    formData.append("password",input.password);
    formData.append("role",input.role);
    if(input.file!=="")
      formData.append("file",input.file);
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      });
      
      toast.success("Account created Successfully")
      if(res.data.success)
         navigate("/login")

    } catch (error) {
      toast.error(error.response.data.message)
       console.log(error)
    }
    finally{
      dispatch(setLoading(false))
      
    }
  };
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0]?.name });
  };
  return (
    <div className="flex items-center  justify-center mt-7 sm:mt-12 lg:mt-8">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex  justify-center  flex-col gap-4 border-2 w-[95%] md:w-[80%] lg:w-[40%] border-gray-300 rounded-[10%] py-10 px-10 md:px-36"
      >
        <div>
          <h1 className="text-4xl">Register Now</h1>
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="fullname" className="">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Model "
            className="outline-none border-2 border-gray-700 px-1"
            value={input.fullname}
            onChange={changeEventHandler}
          />
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
            onChange={changeEventHandler}
            value={input.email}
          />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="mobileNo">Enter Phone Number</label>
          <input
            type="text"
            name="mobileNo"
            id="mobileNo"
            className="outline-none border-2 border-gray-700 px-1"
            placeholder="Enter Mobile Number"
            onChange={changeEventHandler}
            value={input.mobileNo}
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
            onChange={changeEventHandler}
            value={input.password}
          />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="">Select Role</label>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <label htmlFor="recruiter">Recuriter</label>
              <input
                type="radio"
                name="role"
                id="recruiter"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="student">Student</label>
              <input
                type="radio"
                name="role"
                id="student"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="profile">Profile</label>
          <input
            type="file"
            accept="image/*"
            name="profile"
            id="profile"
            className="outline-none border-2 "
            onChange={changeFileHandler}
          />
        </div>
        <div>
          <input
            type="submit"
            value={`${loading ? "Loading ...":"Sign Up"}`}
            className="bg-blue-700 text-white px-5 py-2 rounded-[20px] cursor-pointer mt-5"
          />
        </div>
        <div>
          <span>
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-900">
              Login
            </Link>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
