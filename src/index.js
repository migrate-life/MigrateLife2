'use strict';

//express dependencies
const express = require('express');
const app = express();

//Require routers
const router = require('./routes');

// Public folder for static files
app.use(express.static('public'));

//Use routers
app.use(router);

//export statement
module.exports = app;
