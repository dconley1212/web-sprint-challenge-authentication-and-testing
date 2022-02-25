# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Build your database executing `npm run migrate`.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
   The first major difference between sessions and json web tokens for authentication is that a session will create session data base where it saves an id for all the current sessions going on and sends a cookie with the session id to the browser. The browser receives the cookie and saves it in 'cookie' storage. The Browser will then send the cookie to the server with each client request. The JSON web token will create an "accessToken" that encrypts the 'userId' and 'expiresIn' with the ACCESS_TOKEN_SECRET, and then sends the access token to the browser which is then saved client side. Then with each subsequent request by the client it will send the access token for authentication. JSON WEB tokens are considered a stateless way of authentication with the server since it doesn't save any information within the memory.
2. What does `bcryptjs` do to help us store passwords in a secure manner?
   Bcrypt helps by hashing passwords and by adding salt to the password, which provides enough randomness to the password to make it secure for rainbow tables. Bcrypt also uses hash functions that slow down the attacker so that if a database was stolen it can make the process of hashing the database so slow that the hacker would be brought to a halt.
3. How are unit tests different from integration and end-to-end testing?
   Unit tests are meant to test a specific function or feature. Where as, integration and end to end testing tests larger pieces of the user experience.
4. How does _Test Driven Development_ change the way we write applications and tests?
   Test Driven Development is really important as an app scales because if you don't do it then manually testing everything when you have a bug will cause the building process to be so slow because so much time is spent manually testing everything to find one bug. Especially, when having bugs is inevitable and you need to find them quickly.
