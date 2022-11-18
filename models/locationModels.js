const Sequelize = require('sequelize');
const sequelize = require('../util/database');



//id, name , password, phone number, role

const Location = sequelize.define('location', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Location;