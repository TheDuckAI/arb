import type { NextApiRequest, NextApiResponse } from 'next';
import { getRandomLawProblem } from "../../server/mongodb/actions/lawProblem";
import requestWrapper from "../../server/utils/middleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const randomProblem = await getRandomLawProblem();
  res.status(200).json({ randomProblem });
}

export default requestWrapper(handler, "GET");
