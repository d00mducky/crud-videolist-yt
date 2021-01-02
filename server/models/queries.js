const db = require('../database');

module.exports = {
  read: function(callback) {

    let queryString = 'select * from search_queries';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(results);
    });

  }
}