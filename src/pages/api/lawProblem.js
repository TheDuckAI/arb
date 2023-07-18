import { getRandomLawProblem } from "../../server/mongodb/actions/lawProblem"
import requestWrapper from "../../server/utils/middleware";

async function handler(req, res) {
  const randomProblem = await getRandomLawProblem();
  res.status(200).json({ randomProblem });
}

export default requestWrapper(handler, "GET");
