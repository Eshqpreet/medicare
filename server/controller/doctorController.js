import Doctor from "../models/DoctorSchema.js";
import Bookings from "../models/BookingSchema.js";


// Update doctor details by ID
export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        // Find doctor by ID and update with the new data
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated", data: updatedDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update", error: err.message });
    }
};

// Delete doctor by ID
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        // Find doctor by ID and delete
        await Doctor.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete", error: err.message });
    }
};

// Get a single doctor by ID
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        // Find doctor by ID and exclude password field
        const doctor = await Doctor.findById(id).populate("reviews").select('-password');

        if (doctor) {
            res.status(200).json({ success: true, message: "Doctor found", data: doctor });
        } else {
            res.status(404).json({ success: false, message: "No doctor found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
    try {
        //For Search 
        const { query } = req.query
        let doctors;
        if (query) {
            doctors = await Doctor.find({ isApproved: 'approved', $or: [{ name: { $regex: query, $options: 'i' } }, { specialization: { $regex: query, $options: 'i' } }] }).select('-password')
        }
        else {
            // Find all doctors and exclude password field
            doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
        }

        res.status(200).json({ success: true, message: "Doctors found", data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
};

//Get Doctor Profile 

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ success: false, message: "User not Found!" });
        }

        const { password, ...rest } = doctor._doc;
        const appointments = await Bookings.find({ doctor: doctorId })

        res.status(200).json({ success: true, message: "Profile info is getting", data: { ...rest, appointments } });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Something went wrong :( , Error: " + err.message });
    }
}