import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
    // Get the token from the request headers
    const authToken = req.headers.authorization;

    // Check if the token exists and starts with 'Bearer '
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "No token, authorization denied!" });
    }

    try {
        // console.log(authToken);

        // Extract the token from the 'Bearer ' prefix
        const token = authToken.split(" ")[1];

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET_key);

        // Attach user ID and role to the request for later use in routes
        req.userId = decoded.id;
        req.role = decoded.role;

        // Call the next middleware or route handler
        next();
    } catch (err) {
        // Handle token verification errors
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token Expired, authorization denied!" });

        }
        return res.status(401).json({ success: false, message: "Invalid token, authorization denied!" });
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not Authorized" })
    }

    next();
};
