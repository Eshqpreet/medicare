import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Get all reviews
export const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ success: true, message: "Successful", data: reviews });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
    }
};

// Create Review
export const createReview = async (req, res) => {
    try {
        // Ensure doctor and user are specified, fallback to default values if not provided
        const doctorId = req.params.doctorId || null;
        const userId = req.userId || null;

        const newReview = new Review({
            ...req.body,
            doctor: doctorId,
            user: userId,
        });

        const savedReview = await newReview.save();

        // Update doctor's reviews array with the new review
        await Doctor.findByIdAndUpdate(doctorId, { $push: { reviews: savedReview._id } });

        res.status(201).json({ success: true, message: "Review Submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
    }
};
