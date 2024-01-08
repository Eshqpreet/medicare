import express from "express";
import { getAllReview, createReview } from "../controller/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

// Pass { mergeParams: true } to the child router if you want to access the params from the parent router (i.e., doctor.js).
router.route("/")
    .get(getAllReview)
    .post(authenticate, restrict(["patient"]), createReview);

export default router;
