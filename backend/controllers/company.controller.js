import { Company } from "../models/company.model.js";
import { User } from "../models/user.Model.js";
export const registerCompany = async(req,res)=>{
   try {
     const {name} = req.body;
   //   checking user is recuriter or student 
   //   const userId = req._id;
  
   //    const checkRecuriter = await User.findOne({userId})
   //   console.log(checkRecuriter)
   //   if(checkRecuriter.role === "student")
   //   {
   //    return res.status(400).json({
   //       message:"Student cannont create company",
   //       success:false
   //    })
   //   }
     if(!name)
     { 
          return res.status(400).json({
             message:"Company name is required",
             success:false
          })
     }
     let company = await Company.findOne({name})
     if(company)
     {
         return res.status(400).json({
             message:"you can't register same company",
             success:false
          })
     }
     company = await Company.create({
        name:name,
        userId:req.id
     })
      return res.status(201).json({
        message:"Company registered successfully",
        company,
        success:true
      })
   } catch (error) {
    console.log(error)    
   }


}
export const getCompany = async(req,res)=>{
    try {
        const userId = req.id; //logged in userId ha
        const companies =  await Company.find({userId});
        if(!companies)
        {
             return res.status(404).json({
                message:"Companies",
                success:false })
        }
        return res.status(200).json({
         companies,
         success:true
        })
    } catch (error) {
     console.log(error)    
    }
}

// getCompanybyId
export const getCompanybyId = async(req,res) =>{
   try {
      const companyId = req.params.id;
      const userId = req.id;
      // const company = await Company.findById(companyId);
      const company = await Company.findOne({_id:companyId,userId});


      if(!company)
      {
          return res.status(404).json({
            messasge:"Company not found",
            success:false
          })
      }
      return res.status(200).json({
         company,
         success:true
      })
   } catch (error) {
      return res.status(404).json({
         messasge:"Id invalid ",
         success:false
       })
   }
}

export const updateCompany = async(req,res) =>{
   try {
      const {name,description,website,location} = req.body;
      const file = req.file;
      // cloudinary
      const updateData = {name,description,website,location};
      const company = await Company.findByIdAndUpdate(req.params.id,updateData,{name:true})
   
      if(!company)
      {
          return res.status(404).json({
            message:"Company not found",
            success:false
          })
      }
      return res.status(200).json({
         message:"Company updated successfully",
         success:true
      })
   } catch (error) {
     console.log(error) 
   } 
}
