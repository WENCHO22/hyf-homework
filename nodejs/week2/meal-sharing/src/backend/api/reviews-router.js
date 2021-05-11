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
            response.json(reviews.find(rev=> rev.id === reviewId));
        } else {
            response.sendStatus(404);
        }
    } catch (error) {
        response.sendStatus(500)
    }
});

router.get("/", (request, response) => {
    response.json(reviews);
});

module.exports = router;