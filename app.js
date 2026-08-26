const express = require('express');
const app = express();
const newRoute = require('./routes/new');
const indexRoute = require('./routes/index');
const message = require('./models/message');
const deleteController = require('./controllers/deleteController');
const PORT = process.env.port || 3000;
const path = require('node:path');

// app.js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.use('/', indexRoute);

// new route
app.use('/new', newRoute);

app.post('/delete/:id', deleteController.post);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini message board - listening on port ${PORT}!`);
});
