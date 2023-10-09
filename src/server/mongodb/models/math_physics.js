import mongoose from "mongoose";

const mathPhysicsProblemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Problem_Statement: {
    type: String,
    required: true,
  },
  Topic: {
    type: String,
    required: true,
  },
  Source: String,
  Answer_Candidates: [String],
  Images: [String],
  Output_Format_Instructions: String,
  Solution: {
    type: String,
    required: true,
  },
  Final_Answer: {
    type: String,
    required: true,
  },
  Problem_Type: {
    type: String,
    required: true,
  },
  Answer_Choices: [String],
  rubric: {
    type: String,
    required: true,
  },
  rubric_template: {
    type: String,
    required: true,
  },
});

export const mathNumericalModel =
  mongoose.models.mathNumericalProblem ||
  mongoose.model(
    "mathNumericalProblem",
    mathPhysicsProblemSchema,
    "math_numerical"
  );
export const physicsNumericalModel =
  mongoose.models.physicsNumericalProblem ||
  mongoose.model(
    "physicsNumericalProblem",
    mathPhysicsProblemSchema,
    "physics_numerical"
  );
export const physicsNumericalImgModel =
  mongoose.models.physicsImgProblem ||
  mongoose.model(
    "physicsNumericalImgProblem",
    mathPhysicsProblemSchema,
    "physics_numerical_images"
  );

export const mathProofsModel =
  mongoose.models.mathProofsProblem ||
  mongoose.model("mathProofsProblem", mathPhysicsProblemSchema, "math_prooflike");

export const mathSymbolicModel =
  mongoose.models.mathSymbolicModel ||
  mongoose.model("mathSymbolicModel", mathPhysicsProblemSchema, "math_symbolic");

export const physicsSymbolicModel =
  mongoose.models.physicsSymbolicProblem ||
  mongoose.model("physicsSymbolicProblem", mathPhysicsProblemSchema, "physics_symbolic");

export const physicsSymbolicImgModel =
  mongoose.models.physicsSymbolicImgProblem ||
  mongoose.model(
    "physicsSymbolicImgProblem",
    mathPhysicsProblemSchema,
    "physics_symbolic_img"
  );