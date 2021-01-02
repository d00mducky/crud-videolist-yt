const models = require('../models');

module.exports = {
  create: function(req, res) {
    console.log(req.body.channelId)
    console.log(req.params)

    res.send('videos contr')
  }
};