import {
  mcatReadingValModel,
  mcatScienceValModel,
  mcatScienceImgModel,
} from "../models/mcat_problem";

import _ from "lodash";

import { ObjectId } from "mongodb";

async function findOneById(model, id, projection) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB ID format");
  }
  return await model.findById(id, projection);
}

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

async function findReadingProblemById(id) {
  return await findOneById(mcatReadingValModel, id, {
    "Problem Statement": 1,
    "Answer Candidates": 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findScienceProblemById(id) {
  return await findOneById(mcatScienceValModel, id, {
    "Problem Statement": 1,
    "Answer Candidates": 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

async function findScienceImagesProblemById(id) {
  return await findOneById(mcatScienceImgModel, id, {
    "Problem Statement": 1,
    Images: 1,
    "Answer Candidates": 1,
    Solution: 1,
    "Final Answer": 1,
  });
}

export {
  getRandomReadingProblem,
  getRandomScienceProblem,
  getRandomScienceImagesProblem,
  getAllReadingProblems,
  getAllScienceProblems,
  getAllScienceImagesProblems,
  findReadingProblemById,
  findScienceProblemById,
  findScienceImagesProblemById,
};
