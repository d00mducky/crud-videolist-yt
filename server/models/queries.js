const db = require('../database');

module.exports = {
  getAll: function(callback) {

    let queryString = 'select * from search_history';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(results);
    });

  },

  getLast: function(callback) {

    // see: https://stackoverflow.com/questions/4073923/select-last-row-in-mysql
    let queryString = 'select fields from table order by id desc limit 1';
  }
}