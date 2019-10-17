'use strict';

//express dependencies
const express = require('express');
const app = express();

//Require routers
const router = require('./routes.js');

//Use routers
app.use(router);

//export statement
module.exports = app;
