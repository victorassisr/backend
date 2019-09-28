var Sequelize = require('sequelize');
require('dotenv/config');

var sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host : process.env.DBHOST,
    dialect : 'mysql'
});

var db = {};

db.sequelize  = sequelize;
db.Sequelize = Sequelize;

db.veiculos = require('../models/veiculoModel');

sequelize.authenticate()
.then(() =>  {
    console.log('O banco está acessível!..');
})
.catch( err => {
    console.log("Erro: " + err);
})
.done();

module.exports = db;