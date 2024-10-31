import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose
  .connect(
    "mongodb+srv://meshachogochukwu:micmau@cluster0.kj2di.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.log(error));
}

export default connectDB;