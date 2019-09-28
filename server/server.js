var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var db = require('../db/conn');

require('dotenv/config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//Middleware com o ContentType.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});

consign().include('./routes').into(app);

app.veiculos = db.veiculos(db.sequelize, db.Sequelize); //Model veiculos dentro do app.
app.Sequelize = db.Sequelize;

module.exports = app;