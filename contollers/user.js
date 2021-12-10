const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')
const bcrypt = require('bcrypt');
const saltRounds = 10;


class User extends Model { }
User.init({
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phonenum: DataTypes.STRING(10),
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'Users' });

module.exports.getUsers = async (req, res) => {
  //await sequelize.sync();
  const urs = await User.findAll();
  res.json(urs)
}

module.exports.createUser = async (req, res) => {
  //await sequelize.sync();
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  const uuu = await User.create({ fname: req.body.fname, lname: req.body.lname, phonenum: req.body.phonenum, email: req.body.email, password: hash })
  res.redirect('/user');
}

module.exports.deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      id: req.body.id
    }
  });
  res.redirect('/user');
}

module.exports.updateUser = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  await User.update({ fname: req.body.fname, lname: req.body.lname, phonenum: req.body.phonenum, email: req.body.email, password: hash }, {
    where: {
      id: req.body.id
    }
  });
  res.redirect('/user');
}

module.exports.selectUser = (req, res) => {
  User.findAll({
    where: {
      id: req.params.userId,
    }
  }).then((urs) => {
    res.json(urs)
  })
}