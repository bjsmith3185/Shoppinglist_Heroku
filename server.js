const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;

console.log(process.env.REDIS_URL)

// Define middleware here
app.use(bodyParser.json({limit:'50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit:'50mb', extended: true, parameterLimit: 1000000 }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopping");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Shopping List Server now listening on PORT ${PORT}!`);
});
