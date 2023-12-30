create table DEPOSIT (
	ACTNO varchar(25),
    CNAME varchar(25),
    BNAME varchar(25),
    AMOUNT varchar(25),
    AMOUNT int,
    ADATE date
);

create table BRANCH (
	BNAME varchar(20),
    CITY varchar(20)
);

create table CUSTOMER (
	CNAME varchar(20),
    CITY varchar(20)
);

create table BORROW(
	LOANNO varchar(5),
    CNAME varchar(20),
    BNAME varchar(20),
    AMOUNT int
);

    
