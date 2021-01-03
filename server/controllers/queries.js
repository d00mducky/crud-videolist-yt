const models = require('../models');

module.exports = {
  getAll: function(req, res) {

    models.queries.getAll((error, result) => {
      error ? console.error(error) : res.json(result);
    });
  },

  getLast: function(req, res) {

    models.queries.getLast((error, result) => {
      error ? console.error(error) : res.json(result);
    });
  }
}