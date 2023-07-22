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

export {
  getRandomReadingProblem,
  getRandomScienceProblem,
  getRandomScienceImagesProblem,
};
