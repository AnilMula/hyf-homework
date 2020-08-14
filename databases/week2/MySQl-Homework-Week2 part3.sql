use hyf; -- the databse has task user and status table

-- Get all the tasks assigned to users whose email ends in @spotify.com
select title 
from task 
inner join user on task.user_id = user.id 
where user.email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select title,user.name,task.status_id 
from task 
inner join user on task.user_id = user.id 
inner join status on task.status_id = status.id
where user.name = 'Donald Duck' and status.id = 1;

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select title, created 
from task
inner join user on task.user_id = user.id
where user.name = 'Maryrose Meadows' and month(created)=09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
 
select month(created) as month,count(*) from task group by month(created);