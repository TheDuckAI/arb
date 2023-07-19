import type { NextApiRequest, NextApiResponse } from 'next';
import { getRandomMathProblem } from "../../server/mongodb/actions/numericalProblem";
import requestWrapper from "../../server/utils/middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomProblem = await getRandomMathProblem();
  res.status(200).json({ randomProblem });
}

export default requestWrapper(handler, "GET");
