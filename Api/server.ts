import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL_xyz as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});