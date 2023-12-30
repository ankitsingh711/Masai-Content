select branch, count(*) as tstudents from student group by branch;

select branch, count(*) as tstudents from student group by branch;

ALTER TABLE student
ADD MARKS INT CHECK (MARKS BETWEEN 0 AND 8);

alter table student
modify name varchar(25);

delete from student where branch="etc";

alter table student
rename to STUDINFORMATION;

delete from student;

drop table student;

    
    