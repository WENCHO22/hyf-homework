const { response, request } = require("express");
const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
    try {
        const reviewId = parseInt(request.params.id);
        if (isNaN(reviewId)) {
            response.status(400).json("id must be an integer");
            return;
        }
        if (reviewId <= reviews.length) {
            const reviewById = reviews.filter((review) => review.id === reviewId);
            response.json(reviewById[0]);
        } else {
            response.json({});
        }
    } catch (error) {
        throw error;
    }
});

router.get("/", (request, response) => {
    response.json(reviews);
});

module.exports = router;