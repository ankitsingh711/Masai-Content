-- create table customers (
    -- customer_id INT PRIMARY KEY,
    -- first_name VARCHAR(255) NOT NULL,
    -- last_name VARCHAR(255) NOT NULL,
    -- email VARCHAR(255) NOT NULL,
    -- address VARCHAR(255) DEFAULT NULL,
    -- city VARCHAR(255) DEFAULT NULL,
    -- state VARCHAR(2) DEFAULT NULL,
    -- zip_code VARCHAR(5) DEFAULT NULL
--)

-- create table orders (
    -- order_id INT PRIMARY KEY,
    -- customer_id INT NOT NULL,
    -- order_placed_date DATE NOT NULL,
    -- FOREIGN KEY (customer_id) REFERENCES customers
    -- (customer_id)
--)

-- It's the end of 2016, and the owner of Masai Bakery wants to write an SQL query that finds the COUNT of orders placed in 2016 by customer e-mail address. She wants to ORDER the results by the COUNT of orders placed in 2016, descending, so that she can personally send thank-you e-mails to Masai Bakerys top customers by order volume. Can you write a query that will help the owner of Masai Bakery find the COUNT of all orders placed in 2016, by customer e-mail address, sorted Descending?

-- select * from customers where orders.order_placed_date=2016 group by email inner join customers on customers.customer_id=orders.customer_id;

