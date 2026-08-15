const message = require('../models/message');

module.exports = {
  get: (req, res) => {
    res.render('indexTemplate', { message: message });
  },
};
