const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview,isReviewAuthor, isLoggedIn } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")

// Reviews
// Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;
