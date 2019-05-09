// import dependencies
const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// set up necessarily middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell server to ignore any requests being made to anything in the "public" folder
app.use(express.static("public"));


// turn on routes
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// // set up wildcard (404) route
// app.get('*', function(req, res) {
//   res.json({
//     status: 404,
//     message: "You've come to the wrong place!"
//   });
// });

// turn on server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});