import connectDb from "../mongodb/connectDb"

export default function requestWrapper(handler, method) {
    return async (req, res) => {
        if (req.method !== method) {
            return res.status(400).json({
                success: false,
                message: "Request Failure: Invalid method for request",
            });
        }

        if (method !== "GET") {
            try {
                req.body = JSON.parse(req.body);
            } catch (error) {
                console.log(error);
                return res.status(400).json({
                    success: false,
                    message: "Invalid request body",
                });
            }
        }

        try {
            const mongoRes = await connectDb(); 
            if (!mongoRes.success) {
                return res.status(500).json(mongoRes); 
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Server Error",
            });
        }

        return handler(req, res);
    }
}
