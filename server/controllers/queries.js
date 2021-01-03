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
  },

  storeQuery: function(req, res) {

    let params = [req.body.searchTerm];

    models.queries.storeQuery(params, (error, result) => {
      error ? console.error(error) : res.json(result);
    });
  }
}