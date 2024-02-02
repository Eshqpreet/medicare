// review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Populate the 'user' field when querying for reviews
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

// Calculate and update average ratings after a new review is saved
reviewSchema.post('save', async function (doc) {
  // Update the totalRating in the corresponding doctor document
  const Doctor = mongoose.model('Doctor');
  await Doctor.findByIdAndUpdate(doc.doctor, {
    $inc: { totalRating: 1 },
  });

  // Calculate and update average ratings
  this.constructor.calcAverageRatings(doc.doctor);
});

// Calculate average ratings for a given doctor
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const Doctor = mongoose.model('Doctor');

  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId }
    },
    {
      $group: {
        _id: '$doctor',
        numOfRating: { $sum: 1 },
        averageRating: { $avg: '$rating' }
      }
    }
  ]);

  console.log(stats);

  const averageRating = stats.length > 0 ? stats[0].averageRating : 0;
  const numOfRating = stats.length > 0 ? stats[0].numOfRating : 0;

  // Update the average ratings and totalRating in the corresponding doctor document
  await Doctor.findByIdAndUpdate(doctorId, {
    numOfRating,
    averageRating,
  });
};

export default mongoose.model("Review", reviewSchema);
