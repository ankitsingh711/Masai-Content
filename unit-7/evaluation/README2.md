1. What are Models?()
Solution:- The model we define in the Node.js server is an abstraction of the data in our MongoDB database, which is represented as document. Because of this abstraction, you my use the "Mongoose"schemas to construct a blueprint of how you want to added data to look and behave.


examples: 
const mongoose = require("mongoose);

const userSchema = mongoose.schema({
    fieldName: boolean
});

const Users = mongoose.model("user", userSchema);

2. Explain why mongoose does not return a promise but has a .then(https://mongoosejs.com/docs/promises.html)
Solution:- While save() returns a promise, functions like Mongoose's find() return a Mongoose Query . Mongoose queries are thenables. In other words, queries have a then() function that behaves similarly to the Promise then() function. So you can use queries with promise chaining and async/await.

3. What are aggregation pipelines with mongoose?()
Solution:- An aggregation pipeline consists of one or more stages that process documents: Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values. The documents that are output from a stage are passed to the next stage.

An aggregation pipeline consists of one or more stages that process documents:

-> Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

-> The documents that are output from a stage are passed to the next stage.

-> An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.

Examples: 
I. Calculate Total Order Quanity:
The following aggregation pipeline example contains two stages and returns the total order quantity of medium size pizzas grouped by pizza name:

db.orders.aggregate([]);

$match:{size: "medium"}
$group: {_id:"$name", totalQuantity: {sum: "$quantity"}}


$match
$sum
$sort

4. I'm using an arrow function for a virtual, middleware, getter/setter, or method and the value of this is wrong. Why?
Solution:- Arrow functions handle the this keyword much differently than conventional functions 4. Mongoose getters/setters depend on this to give you access to the document that you’re writing to, but this functionality does not work with arrow functions. Do not use arrow functions for mongoose getters/setters unless do not intend to access the document in the getter/setter.

5. Should I create/destroy a new connection for each database operation?
Solution:- No. Open your connection when your application starts up and leave it open until the application shuts down.

6. My query/update seems to execute twice. Why is this happening?
Solution:- Its running twice and executing more than once because queries are not promise you shouldn't mix callback function and then() otherwise it will run twice. We can use .exec() to convert it to a real promise.

7. How do you create indexes with mongoose?
Solution:- Mongoose supports 2 syntaxes for declaring an index on a user's name. const userSchema = new Schema({ name: { type: String, index: true } // Build an index on `name` }); // Equivalent: const userSchema = new Schema({ name: String }); userSchema. index({ name: 1 }); In Mongoose, you declare indexes in your schemas.

Indexes are defined through ensureIndex every time a model is compiled for a certain connection / database. This means that indexes will only be ensured once during the lifetime of your app.

var User = new Schema({
    name: { type: String, index: true }
})

var User = new Schema({
    name: { type: String, sparse: true }
})

var User = new Schema({
    name: { type: String, unique: true }
})

// or

var User = new Schema({
    name: { type: String, index: { unique: true } }
})


8. What are pre and post hooks?(https://getbraincloud.com/apidocs/cloud-code-central/cloud-code-tutorials/cc-tutorial-4-pre-and-post-hooks/#:~:text=Pre%20and%20Post%20Hooks%20allow,sent%20to%20the%20API%20method.)
Solution:- Pre and Post Hooks allow you to attach Cloud Code scripts to brainCloud's Client API – in effect, “hooking” into the API either before (pre) or after (post) the API method has been executed. Pre-hooks allow you to pre-process data before it is sent to the API method.

Pre Hooks
Pre-hook scripts are executed before the API call they are hooked to.  They allow you to preprocess the data that gets passed to the API call, or even return an error immediately and skip the API call altogether.

To create a pre-hook script starts by creating a new Cloud Code script in the Cloud Code | Scripts section of the design tab.

Once you’ve created the script, go to the Edit tab and we’ll write the logic for our hook.

Accessing & Returning Data
Similar to how regular Cloud Code scripts work, the parameters passed into the hook can be accessed through the “data” object.  However, the fields inside the object are different when the script is a hook. These are the available fields:

service  – The service that the API being hooked belongs to
operation – The operation name for the hooked API
message – The parameters being passed to the API
parms – The custom parameters for the hook.  These are configured when adding the hook in the API Hooks page (covered further down).
In addition to the unique data object passed in, pre-hook scripts return a specific object that contains several fields that must be present for certain operations:

status – When set to a non-200 value the API call will be aborted, and an error return to the calling client
messageOverride – When a hook wants to modify the parameters being passed on to the API, the modified parameters must be assigned to this field of the return object
reasonCode –  A custom reason code for when the status is set to non-200. This is returned to the client as part of the error
errorMessage – A custom error message for when the status is set to non-200. This is returned to the client as part of the error
parms – The custom parameters for the hook.  These are configured when adding the hook in the API Hooks page (covered further down).
For this tutorial, we will hook onto the PlayerStatisitics | SetExperiencePoints API, and we need to keep in mind the parameters that get passed to it when writing our pre-hook. A single parameter is passed to the SetExperiencePoints API:

Post Hooks
Post-hook scripts are called after executing a particular API call. Post-hook scripts can do some post-processing for an API call as well as optionally modifying the data returned to the client.

Let’s create a post hook for the SetExperiencePoints method.  The process is similar to creating a pre-hook, but once again the input “data” object and return object fields have changed.

Accessing & Returning Data
Similar to pre-hook scripts, the “service”, “operation” and “parms” are passed to the script. The “message” component is the result of the call rather than the original calling message data. The original calling message is passed in as “callingMessage”.

service  – The service that the API being hooked belongs to
operation – The operation name for the hooked API
message – The result of the API call
callingMessage – The original message parameters passed into the API
parms – The custom parameters for the hook.  These are configured when adding the hook in the API Hooks page (covered further down).
The returned object for post hooks also differs slightly from pre hooks.  First, a null return object from the script will cause the return message from the API to be sent without modification.  Like the pre-hook, returning a non-200 status will return an error to the calling client with the specified reason code and error message.

To override the message data returned to the client, assign the modified message to the “data” field of the return object.

These are all the return object fields:

status – When set to a non-200 value the API call will be aborted, and an error return to the calling client
data– When a hook wants to modify the message being returned to the client, the modified parameters must be assigned to this field of the return object
reasonCode –  A custom reason code for when the status is set to non-200. This is returned to the client as part of the error
errorMessage – A custom error message for when the status is set to non-200. This is returned to the client as part of the error
In our example script, we will simply append a bool to the return data.

9. What is Authentication?
Solution:- Authentication is the act of proving an assertion, such as the identity of a computer system user. In contrast with identification, the act of indicating a person or thing's identity, authentication is the process of verifying that identity.

10. What is Authoriation?
Solution:- Authorization is the procedure of permitting someone to do something. It defines it an approach to check if the user has permission to need a resource or not. It can represent that what data and information one user can access.

Authorization is generally preceded by authentication for customer identity verification. System administrators (SA) are generally assigned permission levels covering some system and customer resources.

During authorization, a system checks an authenticated user's access rules and either grants or waste resource access. Modern and multiuser operating systems based on efficiently designed authorization processes to support application deployment and administration.

11.How do you do role-based authentication?
Solution:- Role-based authorization enables customer management of users and their roles independently from Payment Feature Services. Role-based authorization has a user registry that is not part of Payment Feature Services. This authorization is optional and does not replace the current model. Customers must select the implementation that best fits their business needs.

For role-based authorization, the customer is responsible for providing the user ID, any optional attributes, and all mandatory user attributes necessary to define the user to Payment Feature Services. The customer must also define the roles that are assigned to the user. Each role must match a group name that is defined in Payment Feature Services. Following a successful user sign-on, Payment Feature Services adds the user to the user repository and assigns them to groups. After the user is assigned to groups, the user interface is displayed according to the permissions assigned to the roles. If the user ID is already defined, an update might occur if any user information changed. If the roles for the user changed, the user is removed from their old roles and configured for the new ones.

12. What is hashing?
Solution:- Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.

Let a hash function H(x) maps the value x at the index x%10 in an Array. For example if the list of values is [11,12,13,14,15] it will be stored at positions {1,2,3,4,5} in the array or Hash table respectively.

13.What is encryption?
Solution:- Encryption is a way of scrambling data so that only authorized parties can understand the information. In technical terms, it is the process of converting human-readable plaintext to incomprehensible text, also known as ciphertext. In simpler terms, encryption takes readable data and alters it so that it appears random. Encryption requires the use of a cryptographic key: a set of mathematical values that both the sender and the recipient of an encrypted message agree on

Although encrypted data appears random, encryption proceeds in a logical, predictable way, allowing a party that receives the encrypted data and possesses the right key to decrypt the data, turning it back into plaintext. Truly secure encryption will use keys complex enough that a third party is highly unlikely to decrypt or break the ciphertext by brute force — in other words, by guessing the key.

Data can be encrypted "at rest," when it is stored, or "in transit," while it is being transmitted somewhere else.

14. How is hashing and encryption different?
Solution:- Encryption and hashing are the two terms used widely in cryptography. In this article, we will learn what is the difference between encryption and hashing.

Encryption is the process of converting a normal readable message known as plaintext into a garbage message or not readable message known as Ciphertext. The ciphertext obtained from the encryption can easily be transformed into plaintext using the encryption key. Some of the examples of encryption algorithms are RSA, AES, and Blowfish.

Hashing is the process of converting the information into a key using a hash function. The original information cannot be retrieved from the hash key by any means. Generally, the hash keys are stored in the database and they are compared to check whether the original information matches or not. They are generally used to store the passwords for login. Some of the examples of a hashing algorithm are MD5, SHA256.


----> Hashing : 
I. Definition: It is a process to convert information to a shorter fixed value known as the key that is used to represent the original information. 

II. Purpose: The purpose of hashing is indexing and retrieving items from the database. The process is very fast.

III. Reverse Process: The hash code or key can not be reversed to the original information by any means. It can only be mapped and the hash code is checked if the hash code is the same the information is the same otherwise not. The original information can not be retrieved

IV. Secure: It is more secure in comparison to encryption.

V. Creation of file: Generally, it tries to generate a new key for each information passed to the hash function but on rare occasions, it might generate the same key popularly known as a collision.

VI. Example: MD5, SHA256

VII. Output: The output of a hashing algorithm is a fixed-size hash value

VIII. Lenght of information: The hashed information is generally of small and fixed length. It does not grow with the increase in the information length of information.

IX. Key management: Hashing does not require a secret key or algorithm to produce a hash value

----> Encryption:
I. Definition: It is the process to encode data securely such that only the authorized user who knows the key or password is able to retrieve the original data for everyone else it is just garbage.

II. Purpose: The purpose of encryption is to transform data to keep it secret from others.

III. Reverse Process: The original information can be easily retrieved if we know the encryption key and algorithm used for encryption.


IV. Secure: It is less secure in comparison to hashing.

V. Creation of File: It will always generate a new key for each information.

VI. Example: RSA, AES and Blowfish

VII. Output: the output of an encryption algorithm is ciphertext of the same size or larger than the original data

VIII. Lenght of information: The encrypted information is not of fixed length. It grows with the increase in length of information

IX. Key management : encryption requires a secret key or algorithm to encrypt and decrypt data


14. What is Salt?
Solution:- Password salting adds a random string (the salt) to a password before hashing it. This way, the hash generated will always be different each time. Even if a hacker obtains the hashed password, it will take them a considerable amount of time to discover the original password that generated it.1

15. What is JWT?
Solution:- JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it


We can use JET for these purpose:

I. Authorization
II. Information Exchange

16. How is JWT different and list the pros and cons of using JWT tokens?
Solution:- Let's talk about the benefits of JSON Web Tokens (JWT) when compared to Simple Web Tokens (SWT) and Security Assertion Markup Language Tokens (SAML).

As JSON is less verbose than XML, when it is encoded its size is also smaller, making JWT more compact than SAML. This makes JWT a good choice to be passed in HTML and HTTP environments.

Security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm. However, JWT and SAML tokens can use a public/private key pair in the form of a X.509 certificate for signing. Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared to the simplicity of signing JSON.

JSON parsers are common in most programming languages because they map directly to objects. Conversely, XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT than SAML assertions.

Regarding usage, JWT is used at Internet scale. This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile.

17. What are the different ways to manage authentication?
Solution:- There are several ways to manage authentication:

I. Password-Based Authentication :-- Passwords are the most common methods of authentication. Passwords can be in the form of a string of letters, numbers, or special characters. To protect yourself you need to create strong passwords that include a combination of all possible options. 

However, passwords are prone to phishing attacks and bad hygiene that weakens effectiveness. An average person has about 25 different online accounts, but only 54% of users use different passwords across their accounts. 

The truth is that there are a lot of passwords to remember. As a result, many people choose convenience over security. Most people use simple passwords instead of creating reliable passwords because they are easier to remember. 

The bottom line is that passwords have a lot of weaknesses and are not sufficient in protecting online information. Hackers can easily guess user credentials by running through all possible combinations until they find a match.

II. Multi Factor Authenticaion :-- Multi-Factor Authentication (MFA) is an authentication method that requires two or more independent ways to identify a user. Examples include codes generated from the user’s smartphone, Captcha tests, fingerprints, voice biometrics or facial recognition. 

MFA authentication methods and technologies increase the confidence of users by adding multiple layers of security. MFA may be a good defense against most account hacks, but it has its own pitfalls. People may lose their phones or SIM cards and not be able to generate an authentication code.

III. Certificate-based authentication :-- Certificate-based authentication technologies identify users, machines or devices by using digital certificates. A digital certificate is an electronic document based on the idea of a driver’s license or a passport. 

The certificate contains the digital identity of a user including a public key, and the digital signature of a certification authority. Digital certificates prove the ownership of a public key and issued only by a certification authority. 

Users provide their digital certificates when they sign in to a server. The server verifies the credibility of the digital signature and the certificate authority. The server then uses cryptography to confirm that the user has a correct private key associated with the certificate.

IV. Biometric Authentication :-- Biometrics authentication is a security process that relies on the unique biological characteristics of an individual. Here are key advantages of using biometric authentication technologies:

Biological characteristics can be easily compared to authorized features saved in a database. 
Biometric authentication can control physical access when installed on gates and doors. 
You can add biometrics into your multi-factor authentication process.
Biometric authentication technologies are used by consumers, governments and private corporations including airports, military bases, and national borders. The technology is increasingly adopted due to the ability to achieve a high level of security without creating friction for the user. Common biometric authentication methods include:

Facial recognition :-- matches the different face characteristics of an individual trying to gain access to an approved face stored in a database. Face recognition can be inconsistent when comparing faces at different angles or comparing people who look similar, like close relatives. Facial liveness like ID R&D’s passive facial liveness prevents spoofing.

Fingerprint scanners—match the unique patterns on an individual’s fingerprints. Some new versions of fingerprint scanners can even assess the vascular patterns in people’s fingers. Fingerprint scanners are currently the most popular biometric technology for everyday consumers, despite their frequent inaccuracies. This popularity can be attributed to iPhones.
Speaker Recognition —also known as voice biometrics, examines a speaker’s speech patterns for the formation of specific shapes and sound qualities. A voice-protected device usually relies on standardized words to identify users, just like a password.
Eye scanners—include technologies like iris recognition and retina scanners. Iris scanners project a bright light towards the eye and search for unique patterns in the colored ring around the pupil of the eye. The patterns are then compared to approved information stored in a database. Eye-based authentication may suffer inaccuracies if a person wears glasses or contact lenses.

V. Token-based authentication

Token-based authentication technologies enable users to enter their credentials once and receive a unique encrypted string of random characters in exchange. You can then use the token to access protected systems instead of entering your credentials all over again. The digital token proves that you already have access permission. Use cases of token-based authentication include RESTful APIs that are used by multiple frameworks and clients.


18. What is cookie-based auth ?
Solution:-- Cookies are pieces of data used to identify the user and their preferences. The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user.

19. What is session management?
Solution:-- Session management is used to facilitate secure interactions between a user and some service or application and applies to a sequence of requests and responses associated with that particular user. When a user has an ongoing session with a web application, they are submitting requests within their session and oftentimes are providing potentially sensitive information. The application may retain this information and/or track the status of the user during the session across multiple requests. More importantly, it is critical that the application has a means of protecting private data belonging to each unique user, especially within authenticated sessions.

Session tokens serve to identify a user’s session within the HTTP traffic being exchanged between the application and all of its users. HTTP traffic on its own is stateless, meaning each request is processed independently, even if they are related to the same session. Thus, session management is crucial for directing these web interactions and these tokens are vital as they’re passed back and forth between the user and the web application. Each request and response made will have an associated session token which allows the application to remember distinct information about the client using it. Session cookies were designed to help manage sessions, however, there are several properties of the cookie that must be configured and implemented correctly to prevent potential compromises.

It should be noted that cookies are not the only means of carrying out a session. It is also possible to include headers that contain session tokens. Moreover, while session tokens can be embedded within a URL, this should not be implemented as URLs are often logged in various places and cached, increasing the likelihood of disclosure.

20. What is O-Auth? 
Solution:-- O-auth is an open standard authorization protocol or framework that provides application the ability for "secure designated access". For Example, you can tell Facebook that it’s OK for ESPN.com to access your profile or post updates to your timeline without having to give ESPN your Facebook password. This minimizes risk in a major way: In the event ESPN suffers a breach, your Facebook password remains safe.

SAML vs O-Auth

SAML (Security Assertion Markup Language) is an alternative federated authentication standard that many enterprises use for Single-Sign On (SSO). SAML enables enterprises to monitor who has access to corporate resources.

There are many differences between SAML and OAuth. SAML uses XML to pass messages, and OAuth uses JSON. OAuth provides a simpler mobile experience, while SAML is geared towards enterprise security. That last point is a key differentiator: OAuth uses API calls extensively, which is why mobile applications, modern web applications, game consoles, and Internet of Things (IoT) devices find OAuth a better experience for the user. SAML, on the other hand, drops a session cookie in a browser that allows a user to access certain web pages – great for short-lived work days, but not so great when have to log into your thermostat every day.

21. What is REST api?(https://aws.amazon.com/what-is/restful-api/#:~:text=RESTful%20API%20is%20an%20interface,applications%20to%20perform%20various%20tasks.)
Solution:-- Representational State Transfer is a software architecture that imposes conditions how an API should work. REST was initially created as a guideline to manage communication on a complex network like the internet. You can use REST-based architecture to support high-performance and reliable communication at a scale. You can easily implement and modify it, bringing visibility and cross-platform portability to any API stream.

API developers can design APIs using several different architectures. APIs that follow the REST architectural style are called REST APIs. Web services that implement REST architecture are called RESTful web services. The term RESTful API generally refers to RESTful web APIs. However, you can use the terms REST API and RESTful API interchangeably.

22. What is gRPC?
Solution:-- A high performance, open source universal RPC framework. gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.

23. What is GraphQL?
Solution:-- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

24. What is HTTP?(https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)
Solution:-- The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

An HTTP request is the way Internet communications platforms such as web browsers ask for the information they need to load a website.

Each HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:

I.HTTP version type
II. a URL
III.an HTTP method
III.HTTP request headers
IV.Optional HTTP body.

Let’s explore in greater depth how these requests work, and how the contents of a request can be used to share information.

25. What is a web socket?(https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/)
Solution:-- Websocke is bidirectional, a full-duplex protocol that is used in the same scenario pf the client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated from either of the client and server, the connection is terminated from both end.

26. What is Caching?
Solution:-- Caching is the process of stroing the frequently used data in our local ystem so that when user request that then it can be served easily and quickly without going to the database again and again.

27. What are ways to cache on the backend?(https://medium.com/@genchilu/cache-strategy-in-backend-d0baaacd2d79)
Solution:-- There are different ways to cache to the backend

28. What is LRU caching ?
Solution:-- An LRU cache is an efficient cache data structure that can be used to figure out what we should evict when the cache is full. The goal is to always have the least-recently used item accessible in O ( 1 ) O(1) O(1) time.

Since our cache could only hold three recipes, we had to kick something out to make room. We got rid of ("evicted") the vanilla cake recipe, since it had been used least recently of all the recipes in the cache. This is called a "Least-Recently Used (LRU)" eviction strategy.

29. What is Redis? Why do we use it?
Solution:-- Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Redis provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

30.  How can we implement caching on frontend?
Solution:-- Frontend caching is a largely underused technique, yet it can be a very powerful optimisation if used correctly. A good reason for caching data in the browser is because we can safely assume that a network request is more expensive and unpredictable than retrieving data from a local cache.

The following article will give a very high level view on a few frontend caching concepts. I will be using Axios in my examples, though the techniques shown should be transferable to whichever library you use.

31. What is a CDN?(https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
Solution:-- CDN( Content-Delivery Network) . A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

Benefits of using CDN:
I. Improvinf website load time.
II. Reducing bandwidth costs
III. Increasing content availability and redundancy
IV. improving website security

32. How does the internet work?
Solution:-- Computers connect to each other and to the Internet via wires, cables, radio waves, and other types of networking infrastructure. All data sent over the Internet is translated into pulses of light or electricity, also called "bits," and then interpreted by the receiving computer. 

33. How do browser works?
Solution:-- A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web.















