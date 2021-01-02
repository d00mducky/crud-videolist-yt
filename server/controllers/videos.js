const models = require('../models');

module.exports = {
  post: function(req, res) {
    console.log(req.body.channelId)
    console.log(req.params)

    res.send('oh hey :D')
  }
};