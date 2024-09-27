import { Application } from "../models/application.Model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: false,
      });
    }
    // apply krne se pehla
    // check if the user has already apply for the job
    const existingAppliction = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingAppliction) {
      return res.status(400).json({
        message: "you have already applied for this job",
        success: false,
      });
    }
    // check if the job exist
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    Job.applications.push(newApplication._id);
    await Job.save();
    return res.status(201).json({
      message: "Job applied Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAppliedJobs = async(req,res) =>{
   try {
      const userId = req.id;
      const applications  = await Application.findById({applicant:userId}).sort({createdAt:-1}).populate({
         path:"Job",
         options:{sort:{createdAt:-1}},
         populate:{
             path:"Company",
             options:{sort:{createdAt:-1}}
         }
      } )
     if(!application)
     {
          return res.status(404).json({
             message:"No Applications found",
             success:false
          })
         }
     return res.status(200).json({
         applications,
         success:true
 
     })
   } catch (error) {
     console.log(error)
   }
}