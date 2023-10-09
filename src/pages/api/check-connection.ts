import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import connectDb from "../../server/mongodb/connectDb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let mongooseStateMessage: string;
  const state = mongoose.connection.readyState;

  switch (state) {
    case 0: // disconnected
      mongooseStateMessage = "MongoDB is disconnected.";
      break;
    case 1: // connected
      mongooseStateMessage = "MongoDB is connected.";
      break;
    case 2: // connecting
      mongooseStateMessage = "MongoDB is connecting.";
      break;
    case 3: // disconnecting
      mongooseStateMessage = "MongoDB is disconnecting.";
      break;
    default:
      mongooseStateMessage = "Unknown MongoDB connection state.";
  }

  const connectionResult = await connectDb();

  res.status(200).json({
    mongooseState: {
      status: state,
      message: mongooseStateMessage,
    },
    connectionAttempt: connectionResult,
  });
};

export default handler;
