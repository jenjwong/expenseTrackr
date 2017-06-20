# Expense Trackr
Generate personalized big-data about spending habits by manually entering expenses!

### Technologies

#### Client
* ES6, React, React-Router, Redux, Redux-Thunk, Redux-Forms, Blueprint, Flexbox, Moment.js, Numeral.js

#### Server
* Node.js, Express, Express-Sessions, Passport, MongoDB, Mongoose, Concurrently

#### Testing
* Enzyme, Jest, Mocha, Codecept.js

---
## Expense Trackr Dash:
![expenseTrackr](https://github.com/jenjwong/expenseTrackr/blob/development/client/public/etrackr.png)
---

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and execute:
```
npm i
```
in the root and client directories.

Start the development environment by running mongod to boot up the mongo daemon and in another window from the root directory run:
```
npm run dev
```
 This command starts the webpack dev-server and the express server. Rename server/variables.env.examples to variables.env and configure your settings.

Authenticate admin users in the mongo shell by running:
```
db.users.updateOne( { "name" : "admin" },  {$set:{"isAdmin" :  true}} )
```

### Client-Side Technologies
To streamline Front-End development Expense Trackr uses:

* [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
* [Blueprint](http://blueprintjs.com/), Palantir's [new React-based UI toolkit](https://medium.com/@palantir/scaling-product-design-with-blueprint-25492827bb4a) for styling UI and has a handful of built-in accessibility features.
* Redux-Forms to minimize form boiler-plate code
*  Moment.js and Numeral.js for consistent styling of times and numbers

### Server-Side Technologies
Server-side expense Trackr uses Express and MongoDB. Flow of control is implemented using ES6 async await.

### Database Design
Expense Trackr's database has a User and Expense model and uses aggregation for complex queries. Expense Trackr implements this relationship by placing User_id as a foreign key on Expenses, allowing for future feature development of shared expenses.

### API Design
Expense Trackr implements REST-APIs. [Click here for a list of semantically named endpoints](https://github.com/jenjwong/expenseTrackr/blob/development/server/routes/index.js)

### Routing
Auth is handled on the backend with Express Session/Passport and API's are protected server-side. Using React-Router 4, the client routes unauthenticated users to the login page and API endpoints only accept calls from logged-in users.

## Tests

Expense Trackr implements unit and end-to-end testing with Mocha, Enzyme, Jest, and Codecept.js.

Codecept.js, a JavaScript Selenium wrapper, stores pictures of browser state during failed tests in endToend.output. With your dev environment running execute:
```
npm selenium-start
```
and
```
npm run headless-tests
```
This will start the selenium server and run your Codecept tests.

Mongo models and operations are tested with Mocha and stub-data.
```
npm run test
```

## License

This application is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
