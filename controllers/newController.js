const db = require('../models/queries');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: async (req, res) => {
    const message = req.body.message;
    const author = req.body.author;
    await db.addMessage(message, author);
    res.redirect('/');
  },
};
