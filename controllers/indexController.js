const db = require('../models/queries');

module.exports = {
  get: async (req, res) => {
    const message = await db.getAllMessages();
    res.render('indexTemplate', { message: message });
  },
};
