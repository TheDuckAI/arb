import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    return {
      success: false,
      message: "MongoDB connection string is not set",
    };
  }

  if (!global.cache) {
    try {
      global.cache = await mongoose.connect(MONGO_URI);
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error connecting to MongoDB",
      };
    }
  }
  return { success: true };
};

export default connectDb;
