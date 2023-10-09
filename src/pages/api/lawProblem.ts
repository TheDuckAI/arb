import type { NextApiRequest, NextApiResponse } from "next";
import { getAllLawProblems } from "../../server/mongodb/actions/lawProblem";
import requestWrapper from "../../server/utils/middleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allProblems = await getAllLawProblems();
    res.status(200).json({ allProblems });
  } catch (error) {
    console.error("Error in API endpoint:", error);
    res.status(500).json({ error: "Failed to fetch data." });
  }
};

export default requestWrapper(handler, "GET");
