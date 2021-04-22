SET NAMES utf8mb4;

CREATE DATABASE meal_sharing;
USE meal_sharing;

 --  Create mealsharing database
 CREATE TABLE `meal`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(255) NOT NULL,
`description` TEXT NOT NULL,
`location` VARCHAR(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` INT UNSIGNED NOT NULL,
`price` DECIMAL(8,2) NOT NULL,
`created_date` TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` INT UNSIGNED NOT NULL,
`meal_id` INT UNSIGNED NOT NULL,
`created_date` DATETIME NOT NULL,
`contact_phonenumber` VARCHAR(20) NOT NULL,
`contact_name` VARCHAR(255) NOT NULL,
`contact_email` VARCHAR(63) NOT NULL,
CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review`(
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(255) NOT NULL,
`description` TEXT  NOT NULL,
`meal_id` INT UNSIGNED NOT NULL,
`stars` INT UNSIGNED NOT NULL,
`created_date` DATETIME,
CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- queries to write	
-- Add a new meal
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("Argentinean empanadas", "Classic south american food prepared and served by a legendary chef",
 "Copenhagen, Denmark", "2021-05-07 12:30:00", 10, 100.00, NOW());
 
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("White rice", "NOthing but rice",
 "Copenhagen, Denmark", "2021-05-08 18:30:00", 10, 5.00, NOW());

-- Get all meals
SELECT * 
FROM MEAL;

--  Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET max_reservations = 12
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE ID = 1;

-- reservations
-- Queries to write
-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(2, 2, now(), "111-555-1312", "Wenceslao Posse Silva", "wencho_22@gmail.com");

--  Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id=1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 4
WHERE ID = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE ID = 1;

-- Review
-- Queries to write
-- Get all reviews
SELECT *
FROM REVIEW;

-- Add a new review
INSERT INTO review(title, `description`, meal_id, stars, created_date)
VALUES("Most boring food ever!", "I tried boring food in my life but this is by far the most boring ever!!",
2, 1, now());

-- Get a review with any id, fx 1
SELECT * 
FROM review
WHERE id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 0
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE from review
WHERE id = 1;



-- ADDITIONAL QUERIES
-- add new meals
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("Continental breakfast", "Best breakfast you'll ever try",
 "Aarhus, Denmark", "2021-04-25 10:00:00", 100, 15.00, NOW());
 INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("Complete dinner buffet", "All you can eat!",
 "Copenhagen, Denmark", "2021-05-02 10:00:00", 80, 60.00, NOW());
 INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("Workers day brunch", "Start your day with a world-class brunch!",
 "Helsingor, Denmark", "2021-05-01 10:00:00", 90, 30.00, NOW());
 INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ("All you can eat BBQ", "From the best grill in town",
"Copenhagen, Denmark", "2021-04-28 10:00:00", 60, 15.00, NOW());

-- add new reservations
INSERT INTO reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(4, 2, now(), "111-500-1312", "Jesus", "jesus@gmail.com");
INSERT INTO reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(6, 5, now(), "0000-1111", "Martin Martin", "mmartin@gmail.com");
INSERT INTO reservation( number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES(2, 5, now(), "98999091", "Carlos Eltopo Kejira", "cbandi@gmail.com");

-- add new reviews
INSERT INTO review(title, `description`, meal_id, stars, created_date)
VALUES("Absolute trash!", "I couldnt finish my food",
2, 1, now());
INSERT INTO review(title, `description`, meal_id, stars, created_date)
VALUES("Best bbq ever!", "Amazing food and all you can eat! Definitly coming back",
6, 5, now());
INSERT INTO review(title, `description`, meal_id, stars, created_date)
VALUES("OK breakfast", "Nothing out of ordinary",
3, 3, now());

-- Get meals that has a price smaller than a specific price fx 90
SELECT * 
from meal
WHERE PRICE < 50;

-- Get meals that still has available reservations
SELECT title, max_reservations, SUM(number_of_guests) AS reserved
FROM meal
JOIN reservation
ON meal.id = meal_id
GROUP BY meal_id
HAVING max_reservations > SUM(number_of_guests);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE "%bbq%";
-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2021-04-22' AND '2021-04-23';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 5;
-- Get the meals that have good reviews
SELECT meal.title, review.stars
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars >=4;

-- Get reservations for a specific meal sorted by created_date
SELECT reservation.id AS reservation_id,  meal.title, reservation.number_of_guests, reservation.created_date AS date_of_reservation
FROM reservation
JOIN meal ON reservation.meal_id = meal.id
WHERE meal.id = 5
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, avg(review.stars) AS stars
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY avg(review.stars) DESC;