import { Company } from "../models/company.model.js";

export const registerCompany = async(req,res)=>{
   try {
     const {name} = req.body;
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
             return res.status(404).json{
                message:""
             }
        }
    } catch (error) {
        
    }
}

