import { User } from "../models/user.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, mobileNo, password, role } = req.body;
    console.log(req.body)
    if (!fullname || !email || !mobileNo || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already Exist",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      mobileNo,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: true,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }
    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with the same role",
        success: false,
      });
    }
    // Generate Token
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      mobileNo: user.mobileNo,
      role: user.role,
      profile:user.profile
    };
    // store token in cookies
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logout Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { email, bio, skills, mobileNo,fullname } = req.body;
    const file = req.file;
    // if (!email || !bio || !skills || !mobileNo) {
    //   return res.status(400).json({
    //     message: "Something is missing",
    //     success: false,
    //   });
    // }

    //   file ayega idhar

    const skillsArray = skills?.split(",");
    const userId = req.id; //middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }
    if(fullname)
       user.fullname = fullname;
    if(email)
    user.email = user.email;

    if(mobileNo)
    user.mobileNo = mobileNo;

   if(skills)
    user.profile.skills = skillsArray;
    //   resume comes later
    await user.save();
    // profilepic bad me karega and resume

    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        mobileNo: user.mobileNo,
        role: user.role,
        profile:user.profile
      };
      return res.status(200).json({
        message:"Profile updated successfully",
        user,
        success:true
      })
  } catch (error) {
    console.log(error)
  }
};
