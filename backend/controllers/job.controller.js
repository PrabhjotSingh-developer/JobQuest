import { Job } from "../models/job.model.js";
//admin
export const postJob = async (req, res) => {
  try {
    const userId = req.id;
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experienceLevel,
      position,
      companyId,
    } = req.body;
    console.log(typeof(req.id))
    if (
      !title ||
      !description ||
      !salary ||
      !requirements ||
      !location ||
      !jobType ||
      !experienceLevel ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements,
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: Number(experienceLevel),
      position:Number(position),
      company: companyId,
      createdBy: userId,
    });
    return res.status(201).json({
      message: "New job created Successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
// job access by employee
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    
    const allJobs = await Job.find(query).populate({
        path:"company"
    }).sort({createdAt:-1});
    if (!allJobs.length) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      allJobs,
      success: true,
    });
  } catch (error) {
    console.log(error)
  }
};

export const getJobById = async(req,res) =>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);

        if(!job)
        {
            return res.status(404).json({
                message: "Job not available",
                success: false,
              });
        }
        return res.status(200).json({
           job,
            success: true,
          });
    } catch (error) {
        console.log(error)
    }
}

// admin all jobs
export const getJobByAdmin = async(req,res)=>{
     try {
          const adminId = req.id;
          console.log(adminId)
          const jobs = await Job.find({createdBy:adminId});

          if(!jobs)
          {
            return res.status(404).json({
                message: "Job not posted",
                success: false,
              });
          }
          return res.status(200).json({
           jobs,
            success: true
          });

     } catch (error) {
        console.log(error);
     }
}   