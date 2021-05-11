const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);
    if (isNaN(mealId)) {
      response.status(400).json("id must be an integer");
      return;
    } if (mealId <= meals.length) {
      response.json(meals.find(meal => meal.id === mealId));
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    response.sendStatus(500);
  }
});

router.get("/", (request, response) => {

  try {
    let filteredMeals = meals;
    if ('maxPrice' in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).send(`Maximum price should be an integer`)
        return;
      }
      filteredMeals = filteredMeals.filter(meal => meal.price <= maxPrice);
    }

    if ('title' in request.query) {
      const title = request.query.title;
      filteredMeals = filteredMeals.filter((meal) => meal.title.includes(`${title}`));
    }

    if ('createdAfter' in request.query) {
      const createdAfter = request.query.createdAfter;
      const createdAfterDate = new Date(createdAfter);

      if (!createdAfterDate.getDate()) {
        return response.status(400).send('Date must be a valid date')
      }
      filteredMeals = filteredMeals.filter(meal => new Date(meal.createdAt).getDate() > (createdAfterDate.getDate() + 1));
    }

    if ('limit' in request.query) {
      const limit = request.query.limit;
      if (isNaN(limit)) {
        response.status(400).send(`Limit should be an integer`)
        return;
      }
      filteredMeals = filteredMeals.slice(0, limit);
    }
    response.json(filteredMeals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;