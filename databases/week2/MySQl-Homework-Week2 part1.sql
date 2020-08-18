<<<<<<< HEAD
use hyf;

-- insert a task
insert into task (title, description, created, updated, due_date, status_id, user_id) values ( 'Do MySql HOmeWork week2', 'First watch class recordings', '2020-09-08 15:54:16','2020-09-08 20:54:16','2020-09-08 23:54:16',2,9);

-- change title of task

update task set title='homework databases week2' where id = 36; 

-- change task due-date

update task set due_date='2020-09-08 23:59:00' where id = 36; 

-- change task status

update task set status_id=1 where id = 36; 

-- mark a status as complete

update task set status_id=3 where id = 36;

-- delete the task

delete from task where id = 36; 
=======
use hyf;

-- insert a task
insert into task (title, description, created, updated, due_date, status_id, user_id) values ( 'Do MySql HOmeWork week2', 'First watch class recordings', '2020-09-08 15:54:16','2020-09-08 20:54:16','2020-09-08 23:54:16',2,9);

-- change title of task

update task set title='homework databases week2' where id = 36; 

-- change task due-date

update task set due_date='2020-09-08 23:59:00' where id = 36; 

-- change task status

update task set status_id=1 where id = 36; 

-- mark a status as complete

update task set status_id=3 where id = 36;

-- delete the task

delete from task where id = 36; 
>>>>>>> 38a26dc0d1c2f21a73130c7f7e7a7b0e6fe8912a
