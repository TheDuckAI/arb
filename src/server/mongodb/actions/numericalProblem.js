import {
  mathNumericalModel,
  physicsNumericalModel,
  physicsImgModel,
  mathProofsModel,
  mathSymbolicModel,
  physicsTestImgModel,
  physicsTestModel
} from "../models/numerical_problem";

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
  const randomDocument = await physicsImgModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return randomDocument[0];
}

async function getAllMathProblems() {
  return await mathNumericalModel.find(
    {},
    {
      "Problem Statement": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllMathProofProblems() {
  return await mathProofsModel.find(
    {},
    {
      "Problem Statement": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllMathSymbolicProblems() {
  return await mathSymbolicModel.find(
    {},
    {
      "Problem Statement": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllPhysicsProblems() {
  return await physicsNumericalModel.find(
    {},
    {
      "Problem Statement": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllPhysicsTestProblems() {
  return await physicsTestModel.find(
    {},
    {
      "Problem Statement": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllPhysicsImgProblems() {
  return await physicsImgModel.find(
    {},
    {
      "Problem Statement": 1,
      Images: 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllPhysicsImgTestProblems() {
  return await physicsTestImgModel.find(
    {},
    {
      "Problem Statement": 1,
      Images: 1,
      Solution: 1,
      "Final Answer": 1,
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

async function findMathTestProblemById(id) {
  return findOneByMongoId(mathTestModel, id, {
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
  return findOneByMongoId(physicsTestImgModel, id , {
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
  getAllMathProblems,
  getAllPhysicsProblems,
  getAllPhysicsImgProblems,
  getAllPhysicsImgTestProblems,
  getAllPhysicsTestProblems,
  findMathProblemById,
  findPhysicsProblemById,
  findPhysicsImgProblemById,
  findMathTestProblemById,
  findPhysicsImgTestProblemById,
  findPhysicsTestProblemById
};
