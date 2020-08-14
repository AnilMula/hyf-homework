use school;

-- create index on name column of the student table
create index name_index on student(name);

-- add a new column to the class table nmed status with enum(not-started, ongoing, finished)
use school;
alter table class add status enum('not-started', 'ongoing', 'finished') not null default 'not-started';   