import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPhysicsImgProblems } from "../../../../../server/mongodb/actions/numericalProblem";
import requestWrapper from "../../../../../server/utils/middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allProblems = await getAllPhysicsImgProblems();

  const formattedResponse = JSON.stringify(allProblems, null, 2);

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(formattedResponse);
}

export default requestWrapper(handler, "GET");
