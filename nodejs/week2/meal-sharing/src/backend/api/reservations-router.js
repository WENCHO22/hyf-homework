const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/:id", async (request, response) => {
    try {
        const reservationId = parseInt(request.params.id);
        if (isNaN(reservationId)) {
            response.status(400).json("id must be an integer");
            return;
        }
        if (reservationId <= reservations.length) {
            const reservationById = reservations.filter((reservation) => reservation.id === reservationId);
            response.json(reservationById[0]);
        } else {
            response.json({});
        }
    } catch (error) {
        throw error;
    }
});

router.get("/", (request, response) => {
    response.json(reservations);
});

module.exports = router; 