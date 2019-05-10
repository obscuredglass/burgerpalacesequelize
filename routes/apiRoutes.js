// import our burgers model
const db = require("../models");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({})
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new burger
  app.post("/api/burgers", function(req, res) {
  
    db.Burger.create({
      name: req.body.name,
      eaten: req.body.eaten
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a burger by its id
  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a burger's eaten to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.body);
    console.log(req.params);
    // req.body => {eaten: true} || {eaten : false}
    db.Burger.update({
      eaten: req.body.eaten
    },
      {
      where: {
        id: req.params.id
      }
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a burger by its id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
