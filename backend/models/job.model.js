import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     requirements:{
        type:String
     },
     salary:{
        type:Number,
        required:true
     },
     location:{
        type:String,
        required:true
     },
     jobType:{
        type:String,
        required:true,
     },
     position:{
        type:Number,
        required:true
     },
     company:{
        type:mongoose.Schema.type.ObjectId,
        ref:"Company",
        required:true
     },
     createdBY:{
        type:mongoose.Schema.type.ObjectId,
        ref:"User",
        required:true
     },
     applications:{
        type:mongoose.Schema.type.ObjectId,
        ref:"Application",
        
     }
},{timestamps:true})
export const Job = mongoose.model("Job",jobsSchema);
