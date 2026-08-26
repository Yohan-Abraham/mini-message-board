const { removeMessage } = require('../models/queries');

module.exports = {
  post: async (req, res) => {
    const { id } = req.params;
    await removeMessage(id);
    res.redirect('/');
  },
};
