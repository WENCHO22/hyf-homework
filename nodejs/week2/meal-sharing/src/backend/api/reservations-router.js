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
            response.json(reservation.find(r => r.id === reservationId));
        } else {
            response.sendStatus(404);
        }
    } catch (error) {
        response.sendStatus(500)
    }
});

router.get("/", (request, response) => {
    response.json(reservations);
});

module.exports = router; 