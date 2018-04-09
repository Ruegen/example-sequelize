const Sequelize = require('sequelize')

const db = new Sequelize('database', '','', {
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
    operatorsAliases: false //required to remove legacy warnings
})

module.exports = db;