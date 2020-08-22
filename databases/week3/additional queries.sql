-- find cheap meal(both title and price)
-- find expensive meal(both title and price)
-- find average meal price.
-- find meals and prices below average price
-- find meals with same price
-- find meals on the same location
-- find meal with highest number of reservations
-- find total number of guests reserved for all the meal
-- check meals with total number of guests reserved is more than maximum number of reservation
-- find persons who reserved more than one meal

-- find cheap meal(both title and price)
SELECT 
    title
FROM
    meal
WHERE
    price IN (SELECT 
            MIN(price)
        FROM
            meal);

-- find expensive meal(both title and price)
SELECT 
    title
FROM
    meal
WHERE
    price IN (SELECT 
            MAX(price)
        FROM
            meal);

-- find average meal price.
SELECT 
    AVG(price)
FROM
    meal;

-- find meals and prices below average price
SELECT 
    title, price
FROM
    meal
WHERE
    price < (SELECT 
            AVG(price)
        FROM
            meal);

-- find meals with same price
-- step1: find duplicate values
SELECT 
    price
FROM
    meal
GROUP BY price
HAVING COUNT(price) > 1;
-- step2: use step1 as inner query
SELECT 
    title, price
FROM
    meal
WHERE
    price IN (SELECT 
            price
        FROM
            meal
        GROUP BY price
        HAVING COUNT(price) > 1)
ORDER BY price;

-- find meals on the same location(same as above)
SELECT 
    title, location
FROM
    meal
WHERE
    location IN (SELECT 
            location
        FROM
            meal
        GROUP BY location
        HAVING COUNT(location) > 1)
ORDER BY location;

-- find meal with highest number of reservations
SELECT 
    title, max_reservations
FROM
    meal
WHERE
    max_reservations = (SELECT 
            MAX(max_reservations)
        FROM
            meal);
            
-- find total number of guests reserved for all the meals
-- on one table select meal_id, sum(number_of_guests) from reservation group by  meal_id;
SELECT 
    meal.id, meal.title, SUM(reservation.number_of_guests)
FROM
    meal
        INNER JOIN
    reservation ON meal.id = reservation.meal_id
GROUP BY meal_id;

-- check meals with total number of guests reserved is more than maximum number of reservation
SELECT 
    meal.id, meal.title, SUM(number_of_guests), meal.max_reservations
FROM
    meal
        JOIN
    reservation ON meal.id = reservation.meal_id
GROUP BY meal_id
HAVING SUM(number_of_guests) - meal.max_reservations > 0;

-- find  persons who reserved more than one meal
SELECT 
    meal.id, meal.title, reservation.contact_name
FROM
    meal
        INNER JOIN
    reservation ON meal.id = reservation.meal_id
        AND reservation.contact_name IN (SELECT 
            contact_name
        FROM
            reservation
        GROUP BY contact_name
        HAVING COUNT(contact_name) > 1)
ORDER BY contact_name ASC;