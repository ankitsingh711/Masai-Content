select *from worker 
group by salary 
order by  salary desc limit 1,1;

SELECT MAX(SALARY) FROM worker WHERE SALARY < (SELECT MAX(SALARY) FROM Employee);

select * from worker where worker_id % 2 = 0;

SELECT salary, COUNT(salary) FROM worker GROUP BY department HAVING COUNT(salary) > 1;