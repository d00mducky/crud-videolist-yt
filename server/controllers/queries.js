const models = require('../models');

module.exports = {
  getAll: function(req, res) {

    res.send('queries contr');
    models.queries.getAll((error, result) => {
      error ? console.error(error) : res.json(result);
    });
  }
}