import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import jobRouter from "./routes/jobRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json());

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

// api endpoint
app.use("/api/jobs", jobRouter);

app.listen(port, () => {
  console.log("Server running on port", port);
});
