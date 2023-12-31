import { lawProblemModel } from "../models/law_problem";

import { ObjectId } from "mongodb";

async function findOneById(model, id, projection) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB ID format");
  }
  return await model.findById(id, projection);
}

async function getRandomLawProblem() {
  const randomDocument = await lawProblemModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  return randomDocument[0];
}

async function getAllLawProblems() {
  return await lawProblemModel.find(
    {},
    {
      "Problem Statement": 1,
      "Problem Number": 1,
      "Answer Candidates": 1,
      "Final Answer": 1,
      "Problem Type": 1,
    }
  );
}

async function findLawProblemById(id) {
  return await findOneById(lawProblemModel, id, {
    "Problem Statement": 1,
    "Answer Candidates": 1,
    "Final Answer": 1,
  });
}

export { findLawProblemById, getRandomLawProblem, getAllLawProblems };
