USE hyf_lesson1;
-- 1. Add a task
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id) 
VALUES("Clean the kitchen", "Leave it shining", "2020-10-12 10:37:37", "2020-10-12 12:37:37", "2020-12-25 12:37:37", 1, 2); 

-- 2. change task title
UPDATE task
SET title = "Dry clothes"
WHERE id = 1;


-- 3. change task due date
UPDATE task
SET due_date = null
WHERE id = 2;

-- 4. change task status
UPDATE task
SET status_id = 3
WHERE id = 3;

-- 5. mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 3;


-- 6. DELETE a task
DELETE FROM task
WHERE id = 1;

select *
from task;