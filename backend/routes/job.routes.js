import express from "express"
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { getAllJobs, getJobByAdmin, getJobById, postJob } from "../controllers/job.controller.js";
const router = express.Router();

router.route("/postJob").post(isAuthenticated,postJob);
router.route("/getallJob").get(getAllJobs);
router.route("/getallJob/:id").get(getJobById);

router.route("/getadminjobs").get(isAuthenticated,getJobByAdmin);

export default router
