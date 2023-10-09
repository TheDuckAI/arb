import mongoose from "mongoose";

const lawProblemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  "Problem Statement": {
    type: String,
    required: true,
  },
  "Problem Number": {
    type: String,
    required: false,
  },
  "Topic": {
    type: String,
    required: false,
  },
  "Source": {
    type: String,
    required: false, 
  },
  "Answer Candidates": {
    type: [String],
    required: true,
  },
  "Output Format Instructions": {
    type: String,
    required: false,
  },
  "Solution": {
    type: String,
    required: false,
  },
  "Final Answer": {
    type: String,
    required: true,
  },
  "Images": {
    type: [String],
    required: false,
  },
  "Problem Type": {
    type: String,
    required: true,  // I've set this to true since the entry has it
  },
});

export const lawProblemModel = mongoose.models.lawProblem || mongoose.model("law", lawProblemSchema);
