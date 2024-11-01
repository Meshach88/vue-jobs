import express from "express";
import {
  addJob,
  editJob,
  deleteJob,
  viewJobs,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter.get("/list", viewJobs);
jobRouter.post(`/add`, addJob);
jobRouter.put(`/edit/:id`, editJob);
jobRouter.delete(`/delete`, deleteJob);


export default jobRouter;