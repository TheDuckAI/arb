import mongoose from "mongoose";

const mcatSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  problemStatement: {
    type: String,
    required: true,
  },
  problemNumber: {
    type: String,
    required: false,
  },
  answerCandidates: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  topic: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  solution: {
    type: String,
    required: false,
  },
  finalAnswer: {
    type: String,
    required: true,
  },
  outputFormatInstructions: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: true,
  },
  problemType: {
    type: String,
    required: true,
    enum: ["Multiple choice", "Numerical", "Boolean", "Text"],
  },
});

export const mcatReadingValModel =
  mongoose.models.mcatReadingVal ||
  mongoose.model("mcatReadingVal", mcatSchema, "mcat_reading_val");
export const mcatScienceImgModel =
  mongoose.models.mcatScienceImg ||
  mongoose.model("mcatScienceImg", mcatSchema, "mcat_science_images_val");
export const mcatScienceValModel =
  mongoose.models.mcatScienceVal ||
  mongoose.model("mcatScienceVal", mcatSchema, "mcat_science_val");
