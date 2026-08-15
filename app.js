const express = require('express');
const app = express();
const newRoute = require('./routes/new');
const indexRoute = require('./routes/index');
const message = require('./models/message');
const PORT = 3000;
const path = require('node:path');

// app.js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// index route
app.use('/', indexRoute);

// new route
app.use('/new', newRoute);

app.post('/new', (req, res) => {
  message.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect('/');
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini message board - listening on port ${PORT}!`);
});
