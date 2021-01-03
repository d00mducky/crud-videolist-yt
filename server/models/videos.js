const db = require('../database');

module.exports = {
  read: function(callback) {

    let queryString = 'select * from videos';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(null, results);
    });

  },

}