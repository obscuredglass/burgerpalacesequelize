const connection = require("./connection");

const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

const findById = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers WHERE id = ?", [burgerId], function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      } 
      return resolve (dbBurgerData);
    });
  });
};

const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", [burgerDataObj], function(err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

const update = (eatenValue, burgerId) => {
  return new Promise((resolve, reject) => {
    eatenValue = (eatenValue === "false")
      ? true : false;
      connection.query("UPDATE burgers SET eaten = ? WHERE id = ?", [eatenValue, burgerId], function(err, dbBurgerData) {
        if (err){
          return reject(err);
        } else if (dbBurgerData.changedRows === 0){
          return reject({message: "This ain't it chief"})
        } else {
          return resolve(dbBurgerData)
        }
      });
  });
};

const remove = (burgerId) => {
  return new Promise((resolve, reject) =>
  {
    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      } else if (dbBurgerData.affectedRows === 0) {
        return reject({ message: "This is not the burger you're looking for"});
      } else {
        return resolve(dbBurgerData);
      }
    });
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};