const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviews");

// GET all reviews for a specific item
router.get("/", reviewsCtrl.getAllForItem);

// POST a new review for a specific item
router.post("/", reviewsCtrl.addReview);

// PUT (update) a review for a specific item
router.put("/:reviewId", reviewsCtrl.updateReview);

// DELETE a review for a specific item
router.delete("/:reviewId", reviewsCtrl.deleteReview);

module.exports = router;
