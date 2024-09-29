import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/user.js";
import cors from 'cors'

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONOG_DB_URL);
    console.log("Db is connected");
  } catch (error) {
    console.log("error ==>", error);
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected !");
});
app.use(cors({origin : 'http://localhost:5173'}))
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/room", roomRoute);

// middlerware
// handler func
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Somthing went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack : error.stack
  });
});

app.listen(8000, () => {
  connect();
  console.log("connceted to Backend");
});
