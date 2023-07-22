import {
  mathNumericalModel,
  physicsNumericalModel,
  physicsImgModel,
} from "../models/numerical_problem";

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

export {
  getRandomMathProblem,
  getRandomPhysicsImgProblem,
  getRandomPhysicsProblem,
  getAllMathProblems,
  getAllPhysicsProblems,
  getAllPhysicsImgProblems,
};
