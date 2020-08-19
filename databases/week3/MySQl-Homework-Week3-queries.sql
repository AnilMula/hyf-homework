use mealshare;

-- meal table Queries
-- 1.Get all meals
select title as meals from meal;

-- 2.Add a new meal
INSERT INTO meal VALUES(8, 'dahl with sourdough bread', ' ', 'Thomas Laubs Gade 18, st. tv', '2020-08-18 18:00:00', 2, 0.00, '2020-08-18');

-- 3.Get a meal with any id, fx 1
select title from meal where id = 3;

-- 4.Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- adding description
update meal set description = "delicious" where id= 1;

-- 5.Delete a meal with any id, fx 1
delete from meal where id = 1;

-- reservations table
-- 1.Get all reservations
select contact_name, number_of_guests from reservation;

-- 2.Add a new reservation
INSERT INTO reservation VALUES(15,4,'2020-08-12','71445566','Oley',6);

-- 3.Get a reservation with any id, fx 1
select * from reservation where id = 5;

-- 4.Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 5 where id =15;

-- 5.Delete a reservation with any id, fx 1
delete from reservation where id =15;

-- review table
-- 1.Get all reviews
select stars from review; 

-- 2.Add a new review
INSERT INTO review VALUES(9,'good','',4,'2020-08-15',1);

-- 3.Get a review with any id, fx 1
select title, stars from review where id = 2;

-- 4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set stars = 6 where id = 3;

-- 5.Delete a review with any id, fx 1
delete from review where id = 2;

-- ADDITIONAL QUERIES
-- 1. Get meals that has a price smaller than a specific price fx 90
select title,price from meal where price < 60;

-- 2. Get meals that still has available reservations
select meal.id,meal.title,sum(reservation.number_of_guests) as reserved
from meal
join reservation 
on meal.id = reservation.meal_id
group by meal.title;

-- 3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select title from meal where title like '%with%bread%';

-- 4. Get meals that has been created between two dates
select title from meal where meal.created_date between '2020-08-16' and '2020-08-20';

-- 5. Get only specific number of meals fx return only 5 meals
select * from meal  order by price desc limit 5;

-- 6. Get the meals that have good reviews
select meal.id,meal.title, avg(review.stars) 
from meal 
inner join review 
on meal.id = review.meal_id
group by  review.meal_id;
-- to get average of reviews for all the meals
select meal_id, avg(stars) 
from review
group by meal_id;

-- 7. Get reservations for a specific meal sorted by created_date(reservation created)
select meal.id,meal.title,sum(reservation.number_of_guests),reservation.created_date 
from reservation 
inner join meal 
where reservation.meal_id = meal.id
group by reservation.meal_id
order by reservation.created_date asc;

-- 8. Sort all meals by average number of stars in the reviews
select meal.title, avg(review.stars) as average 
from meal 
inner join review 
on meal.id = review.meal_id 
group by meal.title
order by avg(review.stars);