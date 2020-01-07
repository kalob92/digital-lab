// Dependencies
const express = require('express');
const logger = require('morgan');

const routes = require("./routes");

// Set up express
const app = express();
const PORT = process.env.PORT || 3001;

// Models directory for syncing
let db = require('./models');

// Define middleware here to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up request logging
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  });
});
