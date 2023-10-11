import type { NextApiRequest, NextApiResponse } from "next";

import requestWrapper from "@/server/utils/middleware";
import { getStatsForPhysicsSymbolicProblems } from "../../../../../../server/mongodb/actions/stats";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const stats = await getStatsForPhysicsSymbolicProblems();

    const formattedResponse = JSON.stringify(stats, null, 2);

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(formattedResponse);
}

export default requestWrapper(handler, "GET");
