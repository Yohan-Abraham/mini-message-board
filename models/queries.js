const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('Select * FROM messages;');
  return rows;
}

async function addMessage(message, author) {
  await pool.query(
    'INSERT INTO messages (message, author, date) VALUES (($1), ($2), CURRENT_DATE);',
    [message, author],
  );
}

async function removeMessage(id) {
  await pool.query(`DELETE FROM messages WHERE id == ($1);`, [id]);
}

module.exports = {
  getAllMessages,
  addMessage,
  removeMessage,
};
