const jsonResponse = require('./response.js');
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression()); //Compress all routes

app.get('/', function(req, res) {
    res.send(jsonResponse);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});