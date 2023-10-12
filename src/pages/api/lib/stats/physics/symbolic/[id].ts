import { findStatsForPhysicsSymbolicProblemsById } from "@/server/mongodb/actions/stats";
import requestWrapper from "@/server/utils/middleware";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).end();
        return;
    }
    const { id } = req.query;
    const problem = await findStatsForPhysicsSymbolicProblemsById(id);

    const formattedResponse = JSON.stringify(problem, null, 2);

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(formattedResponse);
}

export default requestWrapper(handler, "GET");
