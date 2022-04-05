import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import noteRouter from "./routes/noteRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Welcome to Notify App Backend Panel ✈ "));
app.use("/api/users", userRouter);
app.use("/api/notes", noteRouter);

// Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// Listen Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
