import {
  mcatReadingValModel,
  mcatScienceValModel,
  mcatScienceImgModel,
} from "../models/mcat_problem";

import _ from "lodash";

async function getRandomReadingProblem() {
  const randomDocuments = await mcatReadingValModel.aggregate([
    { $sample: { size: 5 } },
  ]);
  return _.sample(randomDocuments);
}

async function getRandomScienceProblem() {
  const randomDocuments = await mcatScienceValModel.aggregate([
    { $sample: { size: 5 } },
  ]);
  return _.sample(randomDocuments);
}

async function getRandomScienceImagesProblem() {
  const randomDocuments = await mcatScienceImgModel.aggregate([
    { $sample: { size: 5 } },
  ]);
  return _.sample(randomDocuments);
}

async function getAllReadingProblems() {
  return await mcatReadingValModel.find({}).find(
    {},
    {
      "Problem Statement": 1,
      "Answer Candidates": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllScienceProblems() {
  return await mcatScienceValModel.find(
    {},
    {
      "Problem Statement": 1,
      "Answer Candidates": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

async function getAllScienceImagesProblems() {
  return await mcatScienceImgModel.find(
    {},
    {
      "Problem Statement": 1,
      Images: 1,
      "Answer Candidates": 1,
      Solution: 1,
      "Final Answer": 1,
    }
  );
}

export {
  getRandomReadingProblem,
  getRandomScienceProblem,
  getRandomScienceImagesProblem,
  getAllReadingProblems,
  getAllScienceProblems,
  getAllScienceImagesProblems,
};
