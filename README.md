# Expense Trackr
Generate personalized big-data about spending habits by manually entering expenses!

### Technologies

#### Client
* ES6, React, React-Router, Redux, Redux-Thunk, Normalizr, Redux-Forms, localStorage, Blueprint, Flexbox, Moment.js, Numeral.js

#### Server
* Node.js, Express, Express-Sessions, Passport, MongoDB, Mongoose, Concurrently

#### Testing
* Enzyme, Jest, Mocha, Codecept.js

---
## Expense Trackr Dash:
![expenseTrackr](https://github.com/jenjwong/expenseTrackr/blob/development/client/public/etrackr.png)
---

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and in your root and client directories execute:
```
npm i
```

Start the development environment by running mongod to boot up the mongo daemon and in another window from the root directory run:
```
npm run dev
```
 This command starts the webpack dev-server and express server. Rename server/variables.env.examples to variables.env and configure your settings.

Authenticate admin users in the mongo shell by running:
```
db.users.updateOne( { "name" : "admin" },  {$set:{"isAdmin" :  true}} )
```

### Client-Side Technologies
To streamline Front-End development Expense Trackr uses:

* [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
* [Blueprint](http://blueprintjs.com/), Palantir's [new React-based UI toolkit](https://medium.com/@palantir/scaling-product-design-with-blueprint-25492827bb4a) for styling UI. Blueprint ships with a handful of built-in accessibility features. Blueprint's datepicker was particularly useful in building the reports feature as it automatically allowed searching by a handful of commonly searched spans of time (2 years ago, 6 months ago, ect).
* Redux-Forms to minimize form boiler-plate code
*  Moment.js and Numeral.js for consistent styling of times and numbers

Local storage is used to persist redux state and keep users logged-in until they choose to logout. On logout relevant local storage is cleared and redux state reset.

Expense Trackr's redux store is designed with expenses stored in a single dictionary so there is always only one source of truth for each expense. The expense report and view-of-all-expenses are stored as lists of ids that are used to access the dictionary.

When an expense is added, edited, deleted or updated the change is sent to the server and on the response the single change is made on the client side, avoiding unnecessary re rendering.

### Server-Side Technologies
Server-side, expense Trackr uses Express and MongoDB. Flow of control is implemented using ES6 async await.

### Database Design
Expense Trackr's database is designed with User and Expense models and uses aggregation for complex queries like calculating expenses by week. Expense Trackr implements the relationship between users and expenses by placing User_id as a foreign key on Expenses, allowing for future feature development of shared expenses.

### API Design
Expense Trackr implements REST-APIs. [Click here for a list of semantically named endpoints](https://github.com/jenjwong/expenseTrackr/blob/development/server/routes/index.js)

### Routing
Auth is handled on the backend with Express Session/Passport and API's are protected server-side. Using React-Router 4, the client routes unauthenticated users to the login page and API endpoints only accept calls from logged-in users.

## Tests

Expense Trackr implements unit and end-to-end testing with Mocha, Enzyme, Jest, and Codecept.js.

React components are tested with [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Enzyme allows shallow rendering of components, making it easy to isolate tests. Shallow rendering in Enzyme renders components one level deep so a component can be tested in isolation of its child components. 

To execute the client test suite, in the client directory run:
```
npm run test
```

Codecept.js, a JavaScript Selenium wrapper, stores pictures of browser state during failed tests in endToend.output. With your dev environment running execute:
```
npm run selenium-start
```
and
```
npm run headless-tests
```
This will start the selenium server and run your Codecept tests.

Mongo models and operations are tested with Mocha and stub-data. From the root directory execute:
```
npm run test-db
```

## License

This application is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
