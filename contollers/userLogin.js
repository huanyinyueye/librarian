const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.selectUser = (req, res) => {
    const login = await login.findOne({ where: { email: 'emailLogin' } });
    if (project === null) {
        //  
    } else {
        // 
    }
}

