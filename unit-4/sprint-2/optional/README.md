CRUD with MIDDLEWARE
1.	Make an API using Express to perform crud operations
Create POST - /posts/create – Should be able to create/add posts, and store them in a JSON file called posts.json in the key “posts”
Read – GET-/posts – Should be able to get all the posts
Update – PUT/PATCH - /posts/:postid – modify the post of the given post ID
Delete – DELETE -/post/:postid – delete the post of the given id.

2.	Write a middleware called validator for the POST method - /post/create. It should check if the post body is having the following fields and having the right data for it. Only if it is correct then store the data in a JSON file. Else return Validation failed.
Id-number
Title-string
Content-string
Author-string
3.	Write a Middleware called “logger”. It should log the METHOD, ROUTE, and “user-agent” from request headers in a file called logs.txt
Logs of all requests made should be present in log.txt. Each log must be present in the new line.





