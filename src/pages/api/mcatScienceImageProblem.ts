import type { NextApiRequest, NextApiResponse } from "next";
import { getRandomScienceImagesProblem } from "../../server/mongodb/actions/mcatProblem";
import requestWrapper from "../../server/utils/middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomProblem = await getRandomScienceImagesProblem();
  res.status(200).json({ randomProblem });
}

export default requestWrapper(handler, "GET");
