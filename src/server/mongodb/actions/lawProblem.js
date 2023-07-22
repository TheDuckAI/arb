import lawProblem from "../models/law_problem";

async function getRandomLawProblem() {
  const randomDocument = await lawProblem.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

async function getAllLawProblems() {
  return await lawProblem.find(
    {},
    {
      "Problem Statement": 1,
      "Answer Candidates": 1,
      "Final Answer": 1,
    }
  );
}

async function findLawProblemById(id) {
  return await findOneById(lawProblem, id);
}

export { findLawProblemById, getRandomLawProblem, getAllLawProblems };
