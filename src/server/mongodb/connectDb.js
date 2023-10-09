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

  // Connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  if (mongoose.connection.readyState !== 1) {
    try {
      global.cache = await mongoose.connect(MONGO_URI, options); // Added the options here
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
