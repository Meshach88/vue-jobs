import jobModel from "../model/jobModel.js";

// view jobs
const viewJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find({});
    res.json({ success: true, data: jobs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// add jobs
const addJob = async (req, res) => {
  const job = new jobModel({
    title: req.body.title,
    type: req.body.type,
    location: req.body.location,
    description: req.body.description,
    salary: req.body.salary,
    company: req.body.company,
  });

  try {
    await job.save();
    res.json({ success: true, data:job, message: "Job Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// edit jobs
const editJob = async () => {};

// delete jobs
const deleteJob = async (req, res) => {
  const id = req.body.id
  try {
    await jobModel.findOneAndDelete({id})
    res.json({success:true, message:"Job Deleted"})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }

};

export { viewJobs, addJob, editJob, deleteJob };
