const express = require('express');
const app = express();
const newRoute = require('./routes/new');

//index route
// app.use('/', );

//new route
app.use('/new', newRoute);
