const jwt = require("jsonwebtoken");

function clientauth(req, res, next) {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                message: "Token required"
            });

        }

        const token = authHeader.split(" ")[1];


        if (!token) {

            return res.status(401).json({
                message: "Invalid token"
            });

        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_CLIENT
        );
        req.client = decoded;
        next();

    }

    catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

}

module.exports = clientauth;