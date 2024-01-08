import User from "../models/UserSchema.js";
import Bookings from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"


// Update user details by ID
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        // Find user by ID and update with the new data
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        // Find user by ID and delete
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

// Get a single user by ID
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        // Find user by ID
        const user = await User.findById(id).select('-password');

        if (user) {
            res.status(200).json({ success: true, message: "User found", data: user });
        } else {
            res.status(404).json({ success: false, message: "No user found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        // Find all users
        const users = await User.find({}).select('-password');//Done so that password is removed from the postman

        res.status(200).json({ success: true, message: "Users found", data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

//Get User profile
export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not Found!" });
        }

        const { password, ...rest } = user._doc;

        res.status(200).json({ success: true, message: "Profile info is getting", data: { ...rest } });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Something went wrong :( , Error: " + err.message });
    }
};


//Get Appointements
export const getMyAppointments = async (req, res) => {
    try {

        // Step-1: Retrieve Appointments from booking

        const bookings = await Bookings.find({ user: req.userId })

        // Step-2: Extract Doctor Ids from appointment bookings

        const doctorIds = bookings.map(el => el.doctor.id)

        // Step-3: Retrieve Doctors using doctor Ids

        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')

        res.status(200).json({ success: true, message: "Appointments are getting", data: doctors })

    } catch (err) {
        return res.status(500).json({ success: false, message: "Something went wrong :( , Error: " + err.message })
    }
}