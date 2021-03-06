var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/employees", function(req, res) {
    db.reviews.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/employees/:id", function(req, res) {
    db.reviews
      .findOne({ where: { employee_id: req.params.employee_id } })
      .then(function(result) {
        res.json(result);
      });
  });
  //Create a new example
  app.post("/api/employees", function(req, res) {
    db.reviews.create(req.body).then(function(results) {
      res.json(results);
    });
  });
};

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Employee.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
