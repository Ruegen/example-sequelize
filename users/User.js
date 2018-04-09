const db = require('../db/init')
const {DataTypes} = require('sequelize')

const User = db.define('user', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
})

module.exports = User
