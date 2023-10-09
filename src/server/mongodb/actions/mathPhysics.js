import {
  mathNumericalModel,
  physicsNumericalModel,
  physicsNumericalImgModel,
  mathProofsModel,
  mathSymbolicModel,
  physicsSymbolicImgModel,
  physicsSymbolicModel,
} from "../models/math_physics";

import { ObjectId } from "mongodb";

async function findOneByMongoId(model, id, projection) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB ID format");
  }
  return await model.findById(id, projection);
}

async function getRandomMathProblem() {
  const randomDocument = await mathNumericalModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return randomDocument[0];
}

async function getRandomPhysicsProblem() {
  const randomDocument = await physicsNumericalModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return randomDocument[0];
}

async function getRandomPhysicsImgProblem() {
  const randomDocument = await physicsNumericalImgModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return randomDocument[0];
}

async function getAllMathNumericalProblems() {
  return await mathNumericalModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllMathProofProblems() {
  return await mathProofsModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllMathSymbolicProblems() {
  return await mathSymbolicModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllPhysicsNumericalProblems() {
  return await physicsNumericalModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllPhysicsSymbolicProblems() {
  return await physicsSymbolicModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllPhysicsImgProblems() {
  return await physicsImgModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      Images: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}

async function getAllPhysicsImgTestProblems() {
  return await physicsTestImgModel.find(
    {},
    {
      _id: 1,
      Problem_Statement: 1,
      Topic: 1,
      Images: 1,
      "Output Format Instructions": 1,
      Solution: 1,
      "Final Answer": 1,
      "Problem Type": 1,
      rubric: 1,
      rubric_template: 1,
    }
  );
}



async function findMathProblemById(id) {
  return findOneByMongoId(mathNumericalModel, id, {
    Problem_Statement: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findMathProofProblemById(id) {
  return findOneByMongoId(mathProofsModel, id, {
    Problem_Statement: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findMathSymbolicProblemById(id) {
  return findOneByMongoId(mathSymbolicModel, id, {
    Problem_Statement: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findPhysicsProblemById(id) {
  return findOneByMongoId(physicsNumericalModel, id, {
    Problem_Statement: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findPhysicsTestProblemById(id) {
  return findOneByMongoId(physicsTestModel, id, {
    Problem_Statement: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findPhysicsImgProblemById(id) {
  return findOneByMongoId(physicsImgModel, id, {
    Problem_Statement: 1,
    Images: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findPhysicsImgTestProblemById(id) {
  return findOneByMongoId(physicsTestImgModel, id, {
    Problem_Statement: 1,
    Images: 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

export {
  getRandomMathProblem,
  getRandomPhysicsImgProblem,
  getRandomPhysicsProblem,
  getAllMathProofProblems,
  getAllMathSymbolicProblems,
  getAllPhysicsImgProblems,
  getAllPhysicsImgTestProblems,
  getAllPhysicsSymbolicProblems,
  findMathProblemById,
  findPhysicsProblemById,
  findPhysicsImgProblemById,
  findMathProofProblemById,
  findMathSymbolicProblemById,
  findPhysicsImgTestProblemById,
  findPhysicsTestProblemById,
};
