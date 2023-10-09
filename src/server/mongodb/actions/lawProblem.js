import { lawProblemModel } from "../models/law_problem";
import { ObjectId } from "mongodb";

async function findOneById(model, id, projection) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid MongoDB ID format");
  }
  return await model.findById(id, projection);
}

async function getRandomLawProblem() {
  try {
    const randomDocument = await lawProblemModel.aggregate([
      { $sample: { size: 1 } },
    ]);
    return randomDocument[0];
  } catch (error) {
    console.error("Error in getRandomLawProblem:", error);
    throw error;
  }
}

async function getAllLawProblems() {
  try {
    const data = await lawProblemModel.find({});
    console.log("Data from MongoDB in getAllLawProblems:", data);
    return data;
  } catch (error) {
    console.error("Error in getAllLawProblems:", error);
    throw error;
  }
}

async function findLawProblemById(id) {
  try {
    return await findOneById(lawProblemModel, id, {
      "Problem Statement": 1,
      "Answer Candidates": 1,
      "Final Answer": 1,
    });
  } catch (error) {
    console.error("Error in findLawProblemById:", error);
    throw error;
  }
}

export { findLawProblemById, getRandomLawProblem, getAllLawProblems };
