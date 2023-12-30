-- select * from deposit;
-- insert into deposit (actno, cname, bname, amount, adate) values (100,"anil","vrce",1000,1995-03-01);
-- insert into deposit (actno, cname, bname, amount, adate) values (101,"sunil","mgorad",5000,1996-05-01);
-- insert into deposit (actno, cname, bname, amount, adate) values (102,"rahul","karolbagh",3500,1995-11-01);
-- insert into deposit (actno, cname, bname, amount, adate) values (103,"madhuri","chandni",1200,1995-12-17);
-- insert into deposit (actno, cname, bname, amount, adate) values (103,"pramod","mgroad",3000,1996-12-31);



-- select * from branch;
-- create table branch (
-- 	branch varchar(25) not null,
--     city varchar(25) not null
-- );

-- insert into branch (branch, city) values ("vrce", "nagpur");
-- insert into branch (branch, city) values ("karolbagh", "delhi");
-- insert into branch (branch, city) values ("chandni", "delhi");
-- insert into branch (branch, city) values ("mgroad", "bangalore");

-- select * from customer;

-- insert into customer (cname, city) values ("anil", "calcuta");
-- insert into customer (cname, city) values ("rahul", "baroda");
-- insert into customer (cname, city) values ("madhuri", "nagpur");
-- insert into customer (cname, city) values ("pramod", "nagpur");
-- insert into customer (cname, city) values ("pramod", "delhi");

-- create table borrow (
	-- loanno int autoincrement primary key not null,
--     cname varchar(25) not null,
--     bname varchar(25) not null,
--     amount int not null
-- ) 

-- select * from borrow where amount between 2000 and 3000;
-- select * from deposit;
-- select cname, actno from deposit;
-- select cname from deposit where city="nagpur";
-- select cname from deposit where adate>1995-11-17;
-- select actno, cname from deposit where adate between 1995-12-01 and 1996-06-01;
-- select * from deposit where cname like"c%";
-- select * from borrow where cname like "_u%";
-- select * from deposit where bname="chandni" or bname="mgroad";
-- select * from deposit where bname!="chandni" or bname!="mg road";
-- select * from deposit where amount > 1000 order by asc;
-- select * from deposit where amount > 1000 order by desc;
-- select * from borrow where cname like "__a%" or cname like "__d%";
-- select * from borrow where amount not between 2000 and 8000;
-- select distinct cname from deposit;
-- update deposit set amount=amount*0.1 where branch="vrce";
-- update deposit set amount=amount*0.1 where branch="vrce" and cname="anil";

