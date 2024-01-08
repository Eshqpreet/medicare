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
reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.doctor);
});

// Calculate average ratings for a given doctor
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  //Aggregation Pipeline
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId }
    },
    {
      $group: {
        _id: '$doctor',
        numOfRating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);

  console.log(stats);
  
  // Update the average ratings in the corresponding doctor document
  await mongoose.model('Doctor').findByIdAndUpdate(doctorId, {
    numOfRating: stats.length > 0 ? stats[0].numOfRating : 0,
    avgRating: stats.length > 0 ? stats[0].avgRating : 0,
  });
};

export default mongoose.model("Review", reviewSchema);
