USE hyf_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.name, user.email
FROM task
JOIN user_task
ON task.id = user_task.task_id
JOIN user
ON user_task.user_id = user.id
WHERE user.email LIKE "%@spotify.com";
	
-- Get all the tasks for 'Donald Duck' with status 'Not started
SELECT user.name, task.title, status.name
FROM task
JOIN user_task
ON task.id = user_task.task_id
JOIN status
ON task.status_id = status.id
JOIN user
ON user_task.user_id = user.id
WHERE user.name = "Donald Duck" AND status.name = "Done";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.name, task.title, task.created
FROM user_task
JOIN task
ON user_task.task_id = task.id
JOIN user
ON user_task.user_id = user.id
WHERE user.name = "Maryrose Meadows" AND month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT monthname(created), count(*) AS number_of_tasks
FROM task
GROUP BY monthname(created)
ORDER BY monthname(created);
