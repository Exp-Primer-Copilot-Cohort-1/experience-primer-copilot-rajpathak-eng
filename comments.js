// Create web server

// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Importing models
const Comments = require('../models/comments');

// Setting up router
const commentRouter = express.Router();

// Setting up body-parser
commentRouter.use(bodyParser.json());

// Setting up route for '/'