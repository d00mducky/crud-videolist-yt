const db = require('../database');

exports.module = {
  read: function(callback) {

    let queryString = 'select * from watch_later';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(results);
    });
  }
}