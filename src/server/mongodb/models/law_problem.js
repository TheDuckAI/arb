import mongoose from "mongoose";

const lawProblemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  problemStatement: {
    type: String,
    required: true,
  },
  problemNumber: {
    type: String,
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
  answerCandidates: {
    type: [String],
    required: true,
  },
  outputFormatInstructions: {
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
  images: {
    type: [String],
    required: false,
  },
  problemType: {
    type: String,
  },
});

export const lawProblemModel =
  mongoose.models.lawProblem ||
  mongoose.model("lawProblem", lawProblemSchema, "law");
