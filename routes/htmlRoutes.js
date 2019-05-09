// import our burgers model
const path = require("path")
// const burgers = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "/public/burgers.html"))
      });
}