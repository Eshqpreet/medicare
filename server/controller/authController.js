import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_key, {
        expiresIn: '365d',
    });
    //To Generate the jwt token:
    //open terminal
    //write node and then require('crypto').randomBytes(256).toString('base64');
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        // Use await when querying the database
        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create a new user based on the role
        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }

        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }

        // Save the user to the database
        await user.save();

        res.status(200).json({ success: true, message: "User successfully created" });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ success: false, message: "Internal server error, try again!" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // Check if user exists
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        // Get token
        const token = generateToken(user);

        const { password: _, role, appointments, ...rest } = user._doc;

        res.status(200).json({success: true,message: "Successfully Logged in",token,data: { ...rest },role,});
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ success: false, message: "Failed to log in, try again!" });
    }
};
