1.  What is non-blocking vs blocking? (Link Referred: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
Solution : Blocking is when the execution of JavaScript in the Node Js process must wait unitl a non-JavaScript operations complete.This happens because the event loop is unable to continue running JavaScript while a blocking operation is occuring.

Synchronous methods in the NodeJs standard that use libuv are the most commonly used blocking operations. Node modules also have blocking methods.

example : 
    const fs = require("fs");

    <<<<------ Synchronous ------->>>>
    const data = fs.readFileSync("/file.md");

    <<<<<<-------Asynchronous -------->>>>>>
    const data = fs.readFile("/file.md", (err, data) => {
        if(err) throw err;
        console.log(data);
    });

Explanation :- Here in the first we are reading the file synchronously so without reading the file the compiler will not move further. But in the second we are reading the file asynchronously so event loop will not wait for the file if it's taking too much time to load it will move further for more task and it will be added to the task queue.

* What is throughput?
Solution :- Time taken to I/O from the database to the server is called throughput of the system and we can decrease the throughput by using the asynchronous method becaus it is non-blocking and it will take lesser time as compared to synchronous method. And having less throughput is very important because it will have good user experience all over.

* What is the difference between readFile and readFileSync?
Solution :- readFile is the module used for reading the file asynchronously and it is also non-blocking whereas readFileSync is also the module for reading the file but it is blocking and it will take more time as compared to readFile. Throughput of the readFile is lesser than the readFileSync and concurrency of the readFile is greater than readFileSync and it's also a good thing because concurrency is the capacity of the event loop to handle callback function other than synchrnous function and having greater capacity is very important, so synchronus is lagging in both throughput and concurrency so overall using asynchronous is a good thing unless it's not mentioned to use synchronous.

2.  How can you make a network request using http module? ( Link reffered: https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction)
Solution :-  We can require module called "http" which is provided by the node package manager (npm). We can pass a cllback function in the http and it will take request and response which is object at the end in JavaScript. We can createServer using http.createServer and it is called whenever we can make the request to the server. We can also listen to the server on a particular server which we can pass into the server.listen(PORT).

* How to create a web server without express?
Solution: Express is a fast way to create server and listen to it. But without express we can also create server with the help of module called http provided by the npm. HTTP module will provide you a project with the help of that we can use http.createServer(). We can also listen to the PORT number we want our server to run. 

example :
const http = require("http");
http.createServer((req, res) => {
    const {headers, method, url } = req;
    let body = [];
    req.on("error", (err) => {
        console.log(err);
    })

    res.writeHead(200,{"Content-Type": "application/json"});

    const resBody = {headers, method, url, body};

    res.end(JSON.stringify(resBody));
}).listen(4080);

* What is libuv?
Solution:- Libuv is a C library originally written for NodeJS too abstract non-blocking I/O operations.

-> Event-driven asynchronous I/O model is integrated.

-> It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.

-> It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.

Features of Libuv:-
    -> Full-featured event loop backed by epoll (Linux), kqueue (OSX), IOCP (Windows), event ports (SunOS).
    -> Asynchronous TCP (net module) and UDP (dgram module)
    -> Asynchronous DNS resolution (used partly for the dns module)
    -> Asynchronous file, file system operations & events (fs module)
    ->    ANSI escape code controlled TTY
    ->    Thread pool and Signal handling
    ->    Child processes
    ->    High-resolution clock
    ->    Threading and synchronization primitives.
    ->    Inter-Process Communication using sockets and Unix domain sockets (Windows)

3.  What are the different phases involved in event loop? (https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)
Solution :- The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

* timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
* pending callbacks: executes I/O callbacks deferred to the next loop iteration.
* idle, prepare: only used internally.
* poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
* check: setImmediate() callbacks are invoked here.
* close callbacks: some close callbacks, e.g. socket.on('close', ...).

I. What are timers in Node.js ?
Solution :- A timer specifies the threshold after which a provided callback may be executed rather than the exact time a person wants it to be executed. Timers callbacks will run as early as they can be scheduled after the specified amount of time has passed; however, Operating System scheduling or the running of other callbacks may delay them.

Technically, the poll phase controls when timers are executed.

For example, say you schedule a timeout to execute after a 100 ms threshold, then your script starts asynchronously reading a file which takes 95 ms:

const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
When the event loop enters the poll phase, it has an empty queue (fs.readFile() has not completed), so it will wait for the number of ms remaining until the soonest timer's threshold is reached. While it is waiting 95 ms pass, fs.readFile() finishes reading the file and its callback which takes 10 ms to complete is added to the poll queue and executed. When the callback finishes, there are no more callbacks in the queue, so the event loop will see that the threshold of the soonest timer has been reached then wrap back to the timers phase to execute the timer's callback. In this example, you will see that the total delay between the timer being scheduled and its callback being executed will be 105ms.

To prevent the poll phase from starving the event loop, libuv (the C library that implements the Node.js event loop and all of the asynchronous behaviors of the platform) also has a hard maximum (system dependent) before it stops polling for more events.

3. What is NVM (Node Version Manager) and how we can use it ?
Solution:- It is used to manage the version of Node.js as the name specifies it.
Different projects on the device might be using diff version of Node.js so using one version in a single particular project is very important.

The NVM is used for linux and mac only bur a tool created by coreybutler that is nvm-windows that will provide a management utility for managing Node.js version in Node.js.

We can type nvm-windows and search for that after that we will downlaod nvm in our system but we will make sure that we uninstall the node if we have installed it in our system. After that through the ClI(Command line Interface ).

Step-1: We will check that nvm is installed in our system or not. For that we will type nvm-v in our command line.

Step-2: Now we can use nvm to install with the command nvm install/i latest-node-version.

Step-3: To use the particular version or switch between the version we will type nvm use node-version.

4. What is common.js? how is it different from es modules?(https://www.knowledgehut.com/blog/web-development/commonjs-vs-es-modules)
Solution:- CommonJS modules are a popular way to modularize JavaScript code. They allow you to export and import modules using the export and import keywords, respectively.

ES Modules are a newer way to modularize JavaScript code. Unlike CommonJS modules, which rely on exports and imports, ES Modules use the module keyword. This allows you to define modules in a more declarative way without having to use the export and import keywords. Enroll in Full Stack online course to learn the essential modules in node js.

The main difference that all the modules is installed in the node_modules when using commonjs and that's why name is commonjs whereas in es modules we have different files for different modules and it is very easy to use and handle the error if it throws error.

CommonJs :-
exports.removeSpace = (str) => str.removeSpace();

Now we can import this file wherever we want to use using import keyword. 

const stringOpsModule = require("stringOps.js");
stringOpsModule.removeSpace("This is a test for whitespace");

We can also destructure it and import it.
const { nextLine, singleWildCard, multiWildCard } = require('./stringOps.js') 

ES Module:-
We can use import keword in es module to import from the file we want to just like.

import file from "./file.js";
import module from "path";


5.  How does the crypto module work?
Solution:- Crypto helps us to hash the plain text storing them into the database. For this, you have a hash class that can create fixed length, determenistic, collision-resistant, and undiectional hashes. For hashed data, a password cannot be decrypted with a predetermined key, unlike encrypted data. An HMAC class is a responsible for Hash-based Message Authentication Code, which hashes both key and values to create a single final hash.

import crypto from crypto;
const crypto = require("crypto.js");

crypto.hash({object-information}, salRound, (err, hashPass)=>{
    if (err) throw err;
    res.send(hashPass)
})

6.  What are web sockets?(https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/)
Solution:- Web sockets is a way to create a connection between the client and server just like http but web sockets doesn't loose connection from the server until it is terminated from either side where it is server or from the client sid. We can identify where websockets is used by looking onto the browser if the url starts with ws:// instead of https:// then it's confirmed that is websocket connection.

Where we can use Web-Sockets?
Solution:- 
* Real-Time Application: Real-time web application uses a web socket to show the data at the client end, which is continuously being sent by the backend server. In WebSocket, data is continuously pushed/transmitted into the same connection which is already open, that is why WebSocket is faster and improves the application performance. 
e.g -> Trading websites, Live Cricket Scores

* Gaming Application: In a Gaming application, you might focus on that, data is continuously received by the server, and without refreshing the UI, it will take effect on the screen, UI gets automatically refreshed without even establishing the new connection, so it is very helpful in a Gaming application.

* Chat Application: Chat applications use WebSockets to establish the connection only once for exchange, publishing, and broadcasting the message among the subscribers. It reuses the same WebSocket connection, for sending and receiving the message and for one-to-one message transfer

7. What are microservices? (https://aws.amazon.com/microservices/)
Solution :- Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

Examples : 1. Authentication
            2. Authorization
            3. Email Services
            4. O-Auth

8.  Creating a CLI based app using Node.js and publish it(https://blog.logrocket.com/creating-a-cli-tool-with-node-js/)

Solution:- Let's create a cli app with the help of cli we can play with the todo.

For that we have to create a mkdir todos-cli and cd todos-cli.

Now npm init -y

We will need these three packages to make this application:

1. Commander: This package makes creating the CLI tool easier. It provides functions that will allow us to set the commands, options, and more
2. Chalk: This package lets us print colored messages to the console. It will help us make our CLI tool look nice and pretty
3. Conf:  This package allows us to save persistent information on the user’s machine. We will be using it to save the user’s to-do list

npm i commander chalk conf

Create a root file "index.js" of the project.

Let's require program from commander module.

const {program} from "commander";

To declare a command, we will use the following functions:

program.command: takes a string that defines the format of the command
program.description: describes the command for the user. This is helpful when the user executes our tool with the option --help
program.option: the options that this command can take, if any
program.action: the action that this command performs, which will be a

todos list: this will list the tasks in the user’s to-do list
todos add: this will add a new task to the user’s to-do list
todos mark-done: this will mark specific tasks or all tasks as done in the list

-> How does express work?
Solution:- Express is a framework which is used to make RESTful APIs using Node.js. It's just a faster way to create routes and APIs. It has been called the de facto standard server framework for Node.js.

9. What are routes?
Solution:- Routing refers to determine how an application responds to a client request to a aparticular endpoint, which is a URL (or path) and a specific HTTP request method (GET, POST, and so on). In simple terms, Routing allows targeting routes or different URLs on our page. 


We have methods of routes as (GET, POST, PUT, UPDATE, PATCH, DELETE)

10. What are middlewares ?
Solution:- Middlewares is nothing but a function which takes request, respond and next as a parameter and we put some condition if the condition matches what we want to do then we move next otherwise we stop that function and usually we throw error and what is the status of the error.

example: const SumIs5 = (req, res, next) => {
  if(sum===5){
    next
  }else{
    res.status(400).json({
      err: "Something Error Occured",
      msg: ""
    })
  }
}


11. What is MVC framework?(https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)
Solution:- MVC framework is nothing but a folder structure we follow during our development because it will help us to find the bugs in our application. As full form of MVC is Model, View and Controller / Routers. 

Model–view–controller is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. 

12. How do you do validations?(https://blog.logrocket.com/handle-data-validation-node-js-validatorjs/#:~:text=const%20Validator%20%3D%20require('validatorjs,errors%2C%20false))%3B%20%7D%3B%20module)
Solution:- We can do validation in a various ways because we do validation to restrict something if the condition we have put there is not meeting the criteria and if the condition is true then we move the process further.

let validation = new Validator(data, rules [, customErrorMessages]);

13. How do you do static routing?
Solution:- We use static routing because every time we do not want our APIs to make dynamic so instead we can use static routing. 

const http = require("http");

const server = http.createServer((req, res)=>{
  const url = req.url;
  const method = req.method;

  if(url==="/"){
    res.send("/path);
  }else if(url==="/about"){
    res.send("about page")
  }else{
    res.send("routes not defined")
  }
})

server.listen(3400, ()=>{
  console.log("Server is listening on port 3400")
})

14. What are some templating engines?

Solution:-Template engines are used when you want to rapidly build web applications that are split into different components. Templates also enable fast rendering of the server-side data that needs to be passed to the application.

For example, you might want to have components such as body, navigation, footer, dashboard, etc.

 Template engines are mostly used for server-side applications that are run on only one server and are not built as APIs. The popular ones include Ejs, Jade, Pug, Mustache, HandlebarsJS, Jinja2, and Blade.

 Step-1: npm install express ejs

 Step-2: Setting up the view engine.
 Solution:- 

const express = require("express")
const app = express();


// Set the View Engine or Template Engine
app.set('view engine', 'ejs');

app.listen(3000)

Step-3: Setting up the view folder.

Create a folder called “view”. The view folder should contain our templates. One of these templates is index.ejs, which will generate our front page. The second template is user.ejs, which will be used to pass user data from the server-side to be immediately rendered on the webpage.

index.js
>view
   index.ejs
   user.ejs

Step 4: Setting up the routes

app.get('/', function (req, res) {
  res.render("index");
})
 
app.get("/user", function(req,res){
  const user = {
    name: "Theodore Kelechukwu O.",
    stack: "MERN",
    email: "theodoreonyejiaku@gmail.com",
    hubby: ["singing", "playing guitar", "reading", "philosoph"]
  }
  res.render("user", {user});
})

15. How do you manage sessions in express?
Solutin:- When the client makes a login request to the server, the server will create a session and store it on the server-side. When the server responds to the client, it sends a cookie. This cookie will contain the session’s unique id stored on the server, which will now be stored on the client. This cookie will be sent on every request to the server.

We use this session ID and look up the session saved in the database or the session store to maintain a one-to-one match between a session and a cookie. This will make HTTP protocol connections stateful.

16. How do you manage cookies with express?
Solution:- Cookies are simple, small files/data that are sent to client with a server request and stored on the client side. Every time the user loads the website back, this cookie is sent with the request. This helps us keep track of the user’s actions.

The following are the numerous uses of the HTTP Cookies −

Session management
Personalization(Recommendation systems)
User tracking


Step-1: npm install cookie-parser

Step-2: var express = require("express");

        var app = express();

        app.get("/", function (req, res)=>{
          res.cookie("name", "express").send("cookie set");
        })

        app.listen(port)

      res.send(name, "value", {expresIn: time});

17. What are common libraries you work with express?
Solution:- We have some common libraries in NodeJS:

I. Express
II. Socket.io
III. Async Js
IV. Request
V. Ether Js
VI. Mongoose

18.  What is CORS?
Solution:- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

19. What is testing?
Solution:- Software testing can be stated as the process of verifying and validating whether a software or application is bug-free, meets the technical requirements as guided by its design and development, and meets the user requirements effectively and efficiently by handling all the exceptional and boundary cases. 

The process of software testing aims not only at finding faults in the existing software but also at finding measures to improve the software in terms of efficiency, accuracy, and usability. It mainly aims at measuring the specification, functionality, and performance of a software program or application. 

Software testing can be divided into two steps: 
1. Verification: it refers to the set of tasks that ensure that the software correctly implements a specific function. 

2. Validation: it refers to a different set of tasks that ensure that the software that has been built is traceable to customer requirements.
Verification: “Are we building the product right?” 
Validation: “Are we building the right product?”

1. Manual Testing: Manual testing includes testing software manually, i.e., without using any automation tool or any script. In this type, the tester takes over the role of an end-user and tests the software to identify any unexpected behavior or bug. There are different stages for manual testing such as unit testing, integration testing, system testing, and user acceptance testing. 

Testers use test plans, test cases, or test scenarios to test software to ensure the completeness of testing. Manual testing also includes exploratory testing, as testers explore the software to identify errors in it. 

2. Automation Testing: Automation testing, which is also known as Test Automation, is when the tester writes scripts and uses another software to test the product. This process involves the automation of a manual process. Automation Testing is used to re-run the test scenarios quickly and repeatedly, that were performed manually in manual testing.

Apart from regression testing, automation testing is also used to test the application from a load, performance, and stress point of view. It increases the test coverage, improves accuracy, and saves time and money when compared to manual testing. 


What are the different types of Software Testing Techniques ? 

Software testing techniques can be majorly classified into two categories: 


1. Black Box Testing: The technique of testing in which the tester doesn’t have access to the source code of the software and is conducted at the software interface without any concern with the internal logical structure of the software is known as black-box testing. 

2. White-Box Testing: The technique of testing in which the tester is aware of the internal workings of the product, has access to its source code, and is conducted by making sure that all internal operations are performed according to the specifications is known as white box testing. 

I. Black Box Testing

a. Internal workings of an application are not required.
b. Also known as closed box/data-driven testing.
c. End users, testers, and developers.
d. This can only be done by a trial and error method.

II.  White Box Testing

a. Knowledge of the internal workings is a must.
b. Also known as clear box/structural testing.
c. Normally done by testers and developers.
d. Data domains and internal boundaries can be better tested.

What are different levels of software testing? 

Software level testing can be majorly classified into 4 levels: 

1. Unit Testing: A level of the software testing process where individual units/components of a software/system are tested. The purpose is to validate that each unit of the software performs as designed. 

2. Integration Testing: A level of the software testing process where individual units are combined and tested as a group. The purpose of this level of testing is to expose faults in the interaction between integrated units. 

3. System Testing: A level of the software testing process where a complete, integrated system/software is tested. The purpose of this test is to evaluate the system’s compliance with the specified requirements. 

4. Acceptance Testing: A level of the software testing process where a system is tested for acceptability. The purpose of this test is to evaluate the system’s compliance with the business requirements and assess whether it is acceptable for delivery. 

Unit Testing --> Integration Testing --> System Testing ---> Acceptance Testing

Note: Software testing is a very broad and vast topic and is considered to be an integral and very important part of software development and hence should be given its due importance. 

20. What is HTTPS? what is the difference between HTTP and HTTPS?
Solutiion-: HTTP is the method that helps us to communicate the client side to the server side.

HTTPS is HTTP with encryption and verification. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.

HTTP stands for Hypertext Transfer Protocol, and it is a protocol – or a prescribed order and syntax for presenting information – used for transferring data over a network. Most information that is sent over the Internet, including website content and API calls, uses the HTTP protocol. There are two main kinds of HTTP messages: requests and responses.

In the OSI model (see What is the OSI model?), HTTP is a layer 7 protocol.

What is an HTTP request? What is an HTTP response?
HTTP requests are generated by a user's browser as the user interacts with web properties. For example, if a user clicks on a hyperlink, the browser will send a series of "HTTP GET" requests for the content that appears on that page. If someone Googles "What is HTTP?" and this article shows up in the search results, when they click on the link, their browser will create and send a series of HTTP requests in order to get the information necessary to render the page.

These HTTP requests all go to either an origin server or a proxy caching server, and that server will generate an HTTP response. HTTP responses are answers to HTTP requests.

What is HTTPS?
The S in HTTPS stands for "secure." HTTPS uses TLS (or SSL) to encrypt HTTP requests and responses, so in the example above, instead of the text, an attacker would see a bunch of seemingly random characters.

Instead of:

In HTTPS, how does TLS/SSL encrypt HTTP requests and responses?
TLS uses a technology called public key cryptography: there are two keys, a public key and a private key, and the public key is shared with client devices via the server's SSL certificate. When a client opens a connection with a server, the two devices use the public and private key to agree on new keys, called session keys, to encrypt further communications between them.

All HTTP requests and responses are then encrypted with these session keys, so that anyone who intercepts communications can only see a random string of characters, not the plaintext.

For more on how encryption and keys work, see What is encryption?

21. What is the difference between SQL and NoSQL ?
Solution:- SQL database are usually known as RDBMS (Relational Database Management System) whereas NoSQL database(Non-relational database management system). 

SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 

A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 

Scalability :
In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU, or SSD. But on the other hand, NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.

Structure :
 SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases, or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 


SQL:

I. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
II. These databases have fixed or static or predefined schema
III. These databases are not suited for hierarchical data storage.
IV. These databases are best suited for complex queries
V. Vertically Scalable
VI. Follows ACID property

Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc

NoSQL:

I. Non-relational or distributed database system.
II. They have a dynamic schema
III. These databases are best suited for hierarchical data storage.
IV. These databases are not so good for complex queries
V. Horizontally scalable
VI. Follows CAP(consistency, availability, partition tolerance)


 Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc

22.  How do you do joins in SQL?
Solution:- We use join in SQL to join the two different tables in SQL database so that we can use our union queries and find what we want to find according to our choice. We join with the keyword join but we have something called foreign key to join two or more tables. 

Examples. select * from table1 join table1 oon table1.foreignKey === table2.foreignKey (condition);

23. How do you use lookup in mongodb?
Solution:- $lookup
Changed in version 5.1.

Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing. The 
$lookup
 stage adds a new array field to each input document. The new array field contains the matching documents from the "joined" collection. The 
$lookup
 stage passes these reshaped documents to the next stage.

Starting in MongoDB 5.1, 
$lookup
 works across sharded collections.

To combine elements from two different collections, use the $unionWith pipeline stage

examples: {
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}

from
Specifies the collection in the same database to perform the join with.

from is optional, you can use a $documents stage in a 
$lookup
 stage instead. For an example, see Use a $documents Stage in a $lookup Stage.

Starting in MongoDB 5.1, the collection specified in the from parameter can be sharded.

localField
Specifies the field from the documents input to the 
$lookup
 stage. 
$lookup
 performs an equality match on the localField to the foreignField from the documents of the from collection. If an input document does not contain the localField, the 
$lookup
 treats the field as having a value of null for matching purposes.

foreignField
Specifies the field from the documents in the from collection. 
$lookup
 performs an equality match on the foreignField to the localField from the input documents. If a document in the from collection does not contain the foreignField, the 
$lookup
 treats the value as null for matching purposes.

as
Specifies the name of the new array field to add to the input documents. The new array field contains the matching documents from the from collection. If the specified name already exists in the input document, the existing field is overwritten.


23. What is CAP theorem?
Solution :- CAP(Consistency, Availabilty and Partiton by network fault). 

explain some of the competing requirements in a distributed system with replication. It is a tool used to make system designers aware of the trade-offs while designing networked shared-data systems. 

The three letters in CAP refer to three desirable properties of distributed systems with replicated data: consistency (among replicated copies), availability (of the system for read and write operations) and partition tolerance (in the face of the nodes in the system being partitioned by a network fault). 

The CAP theorem states that it is not possible to guarantee all three of the desirable properties – consistency, availability, and partition tolerance at the same time in a distributed system with data replication. 

The theorem states that networked shared-data systems can only strongly support two of the following three properties: 
 

 Consistency – 
Consistency means that the nodes will have the same copies of a replicated data item visible for various transactions. A guarantee that every node in a distributed cluster returns the same, most recent and a successful write. Consistency refers to every client having the same view of the data. There are various types of consistency models. Consistency in CAP refers to sequential consistency, a very strong form of consistency. 
 
Availability – 
Availability means that each read or write request for a data item will either be processed successfully or will receive a message that the operation cannot be completed. Every non-failing node returns a response for all the read and write requests in a reasonable amount of time. The key word here is “every”. In simple terms, every node (on either side of a network partition) must be able to respond in a reasonable amount of time. 
 
Partition Tolerance – 
Partition tolerance means that the system can continue operating even if the network connecting the nodes has a fault that results in two or more partitions, where the nodes in each partition can only communicate among each other. That means, the system continues to function and upholds its consistency guarantees in spite of network partitions. Network partitions are a fact of life. Distributed systems guaranteeing partition tolerance can gracefully recover from partitions once the partition heals. 
 
The use of the word consistency in CAP and its use in ACID do not refer to the same identical concept. 



The use of the word consistency in CAP and its use in ACID do not refer to the same identical concept. 

In CAP, the term consistency refers to the consistency of the values in different copies of the same data item in a replicated distributed system. In ACID, it refers to the fact that a transaction will not violate the integrity constraints specified on the database schema.

The CAP theorem states that distributed databases can have at most two of the three properties: consistency, availability, and partition tolerance. As a result, database systems prioritize only two properties at a time.

The following figure represents which database systems prioritize specific properties at a given time:

CA(Consistency and Availability)-
           The system prioritizes availability over consistency and can respond with possibly stale data.

           Example databases: Cassandra, CouchDB, Riak, Voldemort.

AP(Availability and Partition Tolerance)-
           The system prioritizes availability over consistency and can respond with possibly stale data.
           The system can be distributed across multiple nodes and is designed to operate reliably even in the face of network partitions.
           Example databases: Amazon DynamoDB, Google Cloud Spanner.

CP(Consistency and Partition Tolerance)-
           The system prioritizes consistency over availability and responds with the latest updated data.
           The system can be distributed across multiple nodes and is designed to operate reliably even in the face of network partitions.
           Example databases: Apache HBase, MongoDB, Redis.

           It’s important to note that these database systems may have different configurations and settings that can change their behavior with           respect to consistency, availability, and partition tolerance. Therefore, the exact behavior of a database system may depend on its            configuration and usage.

for example, Neo4j, a graph database, the CAP theorem still applies. Neo4j prioritizes consistency and partition tolerance over availability, which means that in the event of a network partition or failure, Neo4j will sacrifice availability to maintain consistency.

24. What is indexing?(https://www.indeed.com/career-advice/career-development/what-is-indexing)
Soltion:- Indexing data allows companies to create a point of reference for comparing financial information. An index can make it easier for individuals working in financial or economic roles to better understand the changing value of money, calculate the relative value of an asset more easily and quickly compare different sets of data, regardless of their differences in scale. Learning more about indexes and their different uses can help you better support data retrieval and make more informed financial decisions.

In this article, we discuss what indexing is, list the different uses for indexing and describe the primary types of indexes as they relate to financial markets.


25. What is DB replication?
Soltuion: What is database replication?
Database replication is the frequent electronic copying of data from a database in one computer or server to a database in another -- so that all users share the same level of information. The result is a distributed database in which users can quickly access data relevant to their tasks without interfering with the work of others. Numerous elements contribute to the overall process of creating and managing database replication.

How database replication works
Database replication can either be a single occurrence or an ongoing process. It involves all data sources in an organization's distributed infrastructure. The organization's distributed management system is used to replicate and properly distribute the data amongst all the sources.

Overall, distributed database management systems (DDBMS) work to ensure that changes, additions and deletions performed on the data at any given location are automatically reflected in the data stored at all the other locations. DDBMS is essentially the name of the infrastructure that allows or carries out database replication -- the system that manages the distributed database, which is the product of database replication.

The classic case of database replication involves one or more applications that connect a primary storage location with a secondary location that is often off site. Today, those primary and secondary storage locations are most often individual source databases -- such as Oracle, MySQL, Microsoft SQL and MongoDB -- as well as data warehouses that amalgamate data from these sources, offering storage and analytics services on larger quantities of data. Data warehouses are often hosted in the cloud.

There are several ways to replicate a database. Different techniques offer different advantages, as they vary in thoroughness, simplicity and speed. The ideal choice of technique depends on how companies store data and what purpose the replicated information will serve.

Regarding the timing of data transfer, there are two types of data replication:

Asynchronous replication is when the data is sent to the model server -- the server that the replicas take data from -- from the client. Then, the model server pings the client with confirmation saying the data has been received. From there, it goes about copying data to the replicas at an unspecified or monitored pace.
Synchronous replication is when data is copied from the client server to the model server and then replicated to all the replica servers before the client is notified that data has been replicated. This takes longer to verify than the asynchronous method, but it presents the advantage of knowing that all data was copied before proceeding.
Asynchronous database replication offers flexibility and ease of use, as replications happen in the background. However, there is a greater risk that data will be lost without the client's knowledge because confirmation comes before the main replication process. Synchronous replication is more rigid and time-consuming, but more likely to ensure that data will be successfully replicated. The client will be alerted if it hasn't, since confirmation comes after the entire process has finished.

There are also several types of database replication based on the type of server architecture. The term leader will be used in these types to mean the same thing as model in the previous asynchronous vs. synchronous examples:

Single-leader architecture is one server that receives writes from clients, and replicas draw data from there. This is the most common and classic method. It's a synchronized method, but somewhat inflexible.
Multi-leader architecture is multiple servers that can receive writes and serve as a model for replicas. It is beneficial for when replicas are spread out and leaders must be near all of them to prevent latency.
No-leader architecture is every server that can receive writes and serve as a model for replicas. This was pioneered by Amazon's DynamoDB. While it offers maximum flexibility, it poses challenges for synchronization.

26. What is PACELC theorem?
Solution:- PACELC Theorem
author
MOHDJASIRKHAN
Read
Discuss

The PACELC Theorem is an extension of the CAP Theorem. One of the questions that CAP Theorem wasn’t able to answer was “what happens when there is no Partition, What Logical Combination then a Distributed System have?“. So to answer this, In addition to Consistency, Availability, and Partition Tolerance it also includes Latency as one of the desired properties of a Distributed System. The acronym PACELC stands for Partitioned, Availability, Consistency Else Latency, Consistency.

CAP Theorem
 

 

 PACELC Theorem:
PACELC theorem states that in the case of Network Partition ‘P’ a distributed system can have tradeoffs between Availability ‘A’ and Consistency ‘C’ Else ‘E’ if there is no Network Partition then a distributed system can have tradeoffs between Latency ‘L’ and Consistency ‘C’.

PACELC Theorem
 

 

As we can clearly see from the diagram the  ‘Yes ‘ part is the CAP Theorem and the ‘No’ part is the extension to the CAP Theorem which is PACELC Theorem. For more details on CAP theorem you can refer Various properties of CAP Theorem article.

Partition:
Partition basically means two 2 nodes are not able to communicate with each other. The below diagram gives a better understanding of the same.

Latency in PACELC Theorem:
One of the major pitfalls of the CAP Theorem was it did not make any provision for Performance or Latency, in other words, CAP Theorem didn’t provide tradeoffs when the system is under normal functioning or non-partitioned. Let’s try to understand this by an example:

Consider a scenario, in which you are making a request to Signup up and getting the confirmation after an hour. According to the CAP theorem, this system is available but such latency is unacceptable in any real-world application.

Advantages:
PACELC Theorem considers the latency and consistency tradeoffs that were always prevalent.
It helps us to think about the effective way to choose, and design distributed systems.
Overcomes the major pitfalls of the CAP Theorem.
Conclusion:
All in all PACELC Theorem gives a designer two modes of operation, with and without partitioning. With partitioning, one must choose between Consistency and Availability otherwise in the case of normal operation one must choose between Latency and Consistency.

27. What is Normalization/Denormalization?
Solution:- The process to alter the structure of a database is basically categorized into two ways, one is Normalization and the other is Denormalization. The basic difference between normalization and denormalization is that the database normalization removes the redundancy of data and anomalies in a poorly designed table, while denormalization combines multiple table data into one so that it can be queried quickly.

Read through this article to find out more about normalization and denormalization and how they are different from each other.

What is Normalization?
Normalization is used to remove redundant data from the database and to store non-redundant and consistent data into it. It is a process of converting an unnormalized table into a normalized table. Database normalization is an important process because a poorly designed database table is inconsistent and may create issues while performing operations like insertion, deletion, updating, etc.

The process of Normalization involves resolution of database anomalies, elimination of data redundancy, data dependency, isolation of data, and data consistency. Normalization in databases provides a formal framework to analyze the relations based on the key attributes and their functional dependencies. It reduces the requirements of restructuring of tables.

What is Denormalization?
Denormalization is used to combine multiple table data into one so that it can be queried quickly. It is a process of storing the join of higher normal form relations in the form of base relation that is in a lower normal form. The primary goal of denormalization is to achieve the faster execution of the queries.

In the process of denormalization, the data is integrated into the same database. Denormalization is mainly used where joins are expensive and queries are executed on the table very frequently. However, there is a drawback of denormalization, that is, a small wastage of memory.

28. What is ER(Entity Relationship)?
Solution:-ER (Entity Relationship) Diagram in DBMS
ER model stands for an Entity-Relationship model. It is a high-level data model. This model is used to define the data elements and relationship for a specified system.
It develops a conceptual design for the database. It also develops a very simple and easy to design view of data.
In ER modeling, the database structure is portrayed as a diagram called an entity-relationship diagram.
For example, Suppose we design a school database. In this database, the student will be an entity with attributes like address, name, id, age, etc. The address can be another entity with attributes like city, street name, pin code, etc and there will be a relationship between them.

1. Entity:
An entity may be any object, class, person or place. In the ER diagram, an entity can be represented as rectangles.

Consider an organization as an example- manager, product, employee, department etc. can be taken as an entity.


DBMS ER model concept
a. Weak Entity

An entity that depends on another entity called a weak entity. The weak entity doesn't contain any key attribute of its own. The weak entity is represented by a double rectangle.


2. Attribute
The attribute is used to describe the property of an entity. Eclipse is used to represent an attribute.

For example, id, age, contact number, name, etc. can be attributes of a student.


DBMS ER model concept
a. Key Attribute

The key attribute is used to represent the main characteristics of an entity. It represents a primary key. The key attribute is represented by an ellipse with the text underlined.






















