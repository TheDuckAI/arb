import {
  mcatReadingValModel,
  mcatScienceValModel,
  mcatScienceImgModel,
} from "../models/mcat_problem";

async function getRandomReadingProblem() {
  const randomDocument = await mcatReadingValModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

async function getRandomScienceProblem() {
  const randomDocument = await mcatScienceValModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

async function getRandomScienceImagesProblem() {
  const randomDocument = await mcatScienceImgModel.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

export {
  getRandomReadingProblem,
  getRandomScienceProblem,
  getRandomScienceImagesProblem,
};
