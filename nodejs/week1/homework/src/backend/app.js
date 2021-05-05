const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations")
const reviews = require("./data/reviews")

//get meal with array of reviews
function getMealWithReviews() {
  const mealsWithReviews = meals.map(item => {
    item.reviews = reviews.filter(review => review.mealId === item.id);
    return item;
  });
  return mealsWithReviews;
}
const mealWithReviews = getMealWithReviews()

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.json(mealWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  let cheapMeals = mealWithReviews.filter(item => item.price < 100)
  response.json(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  let largeMeals = mealWithReviews.filter(item => item.maxNumberOfGuests > 10)
  response.json(largeMeals);
});


app.get("/meal", async (request, response) => {
  let randomMeal = mealWithReviews[Math.floor(Math.random() * (mealWithReviews.length + 1))]
  response.json(randomMeal);
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);  
});

app.get("/reservation", async (request, response) => {
  let randomReservation = reservations[Math.floor(Math.random() * (reservations.length + 1))]
  response.json(randomReservation);
});




module.exports = app;