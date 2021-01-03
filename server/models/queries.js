const db = require('../database');

module.exports = {
  getAll: function(callback) {

    let queryString = 'select * from search_history';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(null, results);
    });

  },

  getLast: function(callback) {

    // see: https://stackoverflow.com/questions/4073923/select-last-row-in-mysql
    let queryString = 'select * from search_history order by id desc limit 1';

    db.query(queryString, (error, result) => {
      error ? console.error(error) : callback(null, results);
    })
  }
}