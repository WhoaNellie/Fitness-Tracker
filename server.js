const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_7p3523q8:tacvn6tli4pfnp8mvb221grvat@ds135540.mlab.com:35540/heroku_7p3523q8", {
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});