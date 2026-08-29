const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT, 
  author TEXT, 
  date DATE
);

INSERT INTO messages (message, author, date) 
VALUES ('Hi there!', 'Amando', CURRENT_DATE),
('Hello World!', 'Charles', CURRENT_DATE);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
