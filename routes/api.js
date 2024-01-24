// Create new app for APi route
const express = require("express");
const app = express();

// Controller
const sendMessage = require('../controllers/sendingMessageController');

// Route
app.post('/send-message', sendMessage.sending);


module.exports = app;