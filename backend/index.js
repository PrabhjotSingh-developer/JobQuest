import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from "dotenv"
import connectDB from "./utils/db.js"; 
import userRoute from "./routes/user.route.js";
import companyRoute from './routes/company.routes.js'
dotenv.config({})
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser());
const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT||3000;

app.use("/api/v1/user",userRoute)
// http://localhost:3000/api/v1/user/register
app.use("/api/v1/company",companyRoute)

app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
     connectDB()
})