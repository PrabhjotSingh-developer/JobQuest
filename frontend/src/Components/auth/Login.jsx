import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="flex items-center  justify-center mt-7 sm:mt-12 lg:mt-8">
      <form
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
          />
        </div>
        <div className="flex-col flex gap-2">
          <label htmlFor="">Select Role</label>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <label htmlFor="recruiter">Recuriter</label>
              <input type="radio" name="role" id="recruiter" />
            </div>
            <div className="flex gap-2">
              <label htmlFor="employer">Employer</label>
              <input type="radio" name="role" id="employer" />
            </div>
          </div>
        </div>
       
        <div>
          <input
            type="submit"
            value="Register Now"
            className="bg-blue-700 text-white px-5 py-2 rounded-[20px] cursor-pointer mt-5"
          />
        </div>
        <div>
              <span> New to Website ? <Link to="/signup" className="text-blue-900">Register Here</Link> </span>
        </div>
      </form>
    </div>
  );
}

export default Login
