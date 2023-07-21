import {
  mathNumericalModel,
  physicsNumericalModel,
  physicsImgModel,
} from "../models/numerical_problem";

async function getRandomMathProblem() {
  const randomDocument = await mathNumericalModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}


async function getRandomPhysicsProblem() {
  const randomDocument = await physicsNumericalModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

async function getRandomPhysicsImgProblem() {
  const randomDocument = await physicsImgModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

export {
  getRandomMathProblem,
  getRandomPhysicsImgProblem,
  getRandomPhysicsProblem,
};
