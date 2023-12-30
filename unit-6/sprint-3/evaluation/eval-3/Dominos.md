                                                DOMINOS WEBSITE

------> HLD( High Level Diagram ) Diagram Link : https://drive.google.com/file/d/16r3dRcBBBJpXzTHSkjRTBL_5jYi8OsWI/view?usp=sharing

1. Features( Functionality Requirements ) :-
    a. User features:
        I. Able to login or signup
        II. Able to logout
        III. Select their respective location

    b. Restaurant features:
        I. Restaurants can register themsleves
        II. Able to do crud operation for pizza
        III. Can search for the restaurants
        IV. Can select restaurnts and order food from the respective restaurants

    c. Payment features :-
        I. Credit card
        II. Debit card
        III. UPI
        IV. Paytm Wallets
        V. Amazon Pay

    d. Cart Section :-
        I. User can add the pizza of their choice to the cart.
        II. Remove from the cart
        III. Increase the number of quantity of the pizza
        IV. Able to place order(pizza)

    e. Delivery management :-
        I. Data of the delivery
        II. Data of the delivered pizza
        III. Data of the cancelled pizza

    f. Notification Managements :-
        I. able to sent notification
    
    g. Database :-
        I. Data should be stored according to condition
        II. RDBMS / Non-Relational DBMS

    h. Admin :-
        I. Admin can check for the data
        II. Admin can do crud operation on data stored
        III. Admin can remove or add restaurants
    
    i. Orders :-
        I. Can order the pizzas
        II. Can check the status of the pizza

2. Non-Functional Requirements :-

    a. Latency :- The user who orders for the pizza is hungry and he/she can't wait for the pizza so the search functionality should be very fast. The ordering experience should also not have high latency and must be seamless and fast. Also, since the restaurant/menu related data will be entered through a different service altogether, the lag between the data being entered and the result showing up in the search be acceptable but shouldn't br too much.

    b. Consistency: When a new restaurant is onboard, or a new menu is added, the information needn't be available immediately. Eventual consistency is desireable. However, when an order is placed, the customer, the restaurant and the door dasher should see the same order without any issues. Hance, in the scenario consistency is imperative.

    c. Availability: High availability is desirable for the best experience of a customer and also the restaurants that are processing the order, as well as the dominos. No restaurants would like their business to go down just because the sytem has crashed, that's a serious loff of $.

    d. High throughput: The system should be able to handle high peak load without problems or failure.


3. Capacity Estimations & Constraints :-
    On average  each area code can have 100 restaurants.
    Each restaurant can have 15 dishes that can be served.
    Total records of different pizza = 10M * 10 * 15 = 15B

    Number of customers: 20M

    If each customers on an average places 2 orders everydat, number of orders in a day = 40M

    The peak time of orders will vary usual based on the day of the week. For example, weekends might have more orders than on weekdays. Peak times could be somewhere around noon or at dinner time in each region.

    In general, the searching of menus/restaurants will be read-heavy and the ordering functionality will be write-heavy. The potential of customers looking up past orders once they have been delivered and the food has been consumed in very less.

4. Database :-

    We can use RDBMS because the amount of data being stored, is easy to scaling, partitioning, replication and several other factors. For ACID(Automicity, Consistency, Isolation, Durability ) always a relational database is choosed over a NoSQL counterpart. We can use relational db to store our data of the orders as well for the restaurants because respective restaurants will be having their own pizza and that's make a relationship between the restaurants and pizza so and also the data we are putting is a very heavy data and for a better scalling fot our websites, we can choose RDBMS over non-relational database.

    RDBMS ( Relational Database Managements System ) 
        examples: SQL, Oracle, PostgresSQl, SQLlite

5. AWS Service :-
    I. S3( Simple Storage Services ) : We can use this service to store our data and also it is having a lot of benefits like security, cheap price and renting method and we do not have to worry about anything. Everyting will be taken care by AWS.

    II. EC2 ( Elastic Cloud Computing ) : We can use EC2 for the servers because EC2 gives you a bigger server which we can use so that our works in a better way for a high latency and a lot of throughputs because we are taking 100M users have registered and daily 40M orders is being ordered.

    III. ELB ( Elastic Load Balancing ): We can use ELB services from AWS because we have done horizontal scaling in our servers and for that we have to integrate ELB because ELB divides the task between the servers.

    IV. Route53: We can also use this service from amazon.

    V. CloudFront: It will take care of the DNS service.

    VI. SNS ( Simple Notification Services )

    VII. SES ( Simple Email Services )

    VIII. API Gateway

    IX. RDS ( Relational Database )

    X. IAM ( Identity Authentication Manager)

    5. API Endpoint :-
        a.Orders:-
            /orders --> for all orders of a restaurant
            /orders/:id --> For particular order
        
        b. Restaurants :-
            /restaurants --> for all restaurnats present at selected location of the user
            /restarants/orders --> order present in a particular restaurants

        c. Users :-
            /users/signup ---> Signup users
            /users/login ---> login users
            /users/logout ---> logout users

        d. Cart :-
            /cart --> cart section

        e. Payments :-
            /payment ---> payment option present
            /payment/card
            /payment/upi
            /payment/wallets

        f. Admin
            /admin
            /admin/restaurants




