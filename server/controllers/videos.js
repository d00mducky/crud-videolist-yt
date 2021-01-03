const models = require('../models');

module.exports = {
  getAll: function(req, res) {

    let params = [req.params.queryId];

    models.videos.getAll(params, (error, results) => {
      error ? console.log(error) : res.json(results);
    });
  },

  post: function(req, res) {
    console.log(req.body.channelId)
    console.log(req.params)

    res.send('videos contr')
  },

  storeVideos: function(req, res) {

    let params = [req.body.queryId, req.body.videoData];

    models.videos.storeVideos(params, (error, results) => {
      error ? console.log(error) : res.json(results);
    });
  }
};