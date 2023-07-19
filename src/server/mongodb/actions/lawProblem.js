import lawProblem from "../models/law_problem";

async function getLawProblemById(_id) {
  return lawProblem.findOne({ _id });
}

async function getRandomLawProblem() {
  const count = await lawProblem.countDocuments();
  const random = Math.floor(Math.random() * count);
  return lawProblem.findOne().skip(random);
}

async function getProblemsByTopic(topic) {
  return lawProblem.find({ topic });
}

export { getLawProblemById, getRandomLawProblem, getProblemsByTopic };
