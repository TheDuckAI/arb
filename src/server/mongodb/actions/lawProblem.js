import lawProblem from "../models/law_problem";

async function getLawProblemById(_id) {
  return lawProblem.findOne({ _id });
}

async function getRandomLawProblem() {
  const randomDocument = await lawProblem.aggregate([{ $sample: { size: 1 } }]);
  return randomDocument[0];
}

async function getProblemsByTopic(topic) {
  return lawProblem.find({ topic });
}

export { getLawProblemById, getRandomLawProblem, getProblemsByTopic };
