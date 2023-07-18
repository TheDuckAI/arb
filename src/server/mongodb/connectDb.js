import mongoose from "mongoose";
import urls from "../../server/utils/urls";

const connectDb = async () => {
  if (!global.cache) {
    try {
      global.cache = await mongoose.connect("mongodb+srv://duckai:theduckai2023@cluster0.hwpbkrp.mongodb.net/arb_problems");
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