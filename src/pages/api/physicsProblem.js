import { getRandomPhysicsProblem } from "../../server/mongodb/actions/numericalProblem";
import requestWrapper from "../../server/utils/middleware";

async function handler(req, res) {
  const randomProblem = await getRandomPhysicsProblem();
  res.status(200).json({ randomProblem });
}

export default requestWrapper(handler, "GET");
