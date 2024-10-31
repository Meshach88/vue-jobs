import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    type:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    salary:{type:String, required:true},
    location:{type:String, required:true},
    company:{type:Object, default:{}}
})

const jobModel = mongoose.models.job || mongoose.model('job', jobSchema)

export default jobModel;