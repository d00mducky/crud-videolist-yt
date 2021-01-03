const db = require('../database');

module.exports = {
  read: function(callback) {

    let queryString = 'select * from videos';

    db.query(queryString, (error, results) => {
      error ? console.error(error) : callback(null, results);
    });

  },
  getAll: function(params, callback) {

    let queryString = 'select * from videos where queryId = ?';

    db.query(queryString, params, (error, results) => {
      error ? console.error(error) : callback(null, results);
    });
  },
  storeVideos: function (params, callback) {

    let queryString = '';

    db.query(queryString, params, (error, results) => {
      error ? console.error(error) : callback(null, results);
    });
  }

}