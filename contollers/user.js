const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')

class User extends Model { }
User.init({
  // id:{ type:DataTypes.INTEGER, primaryKey: true},
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phonenum:DataTypes.INTEGER,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'Users' });

module.exports.getUsers = async (req, res) => {
  await sequelize.sync();
  const urs = await User.findAll();
  res.json(urs)
}

module.exports.createUser = async (req, res) => {
  await sequelize.sync();
  const uuu = await User.create({ fname: req.body.fname, lname: req.body.lname, phonenum:req.body.phonenum, email:req.body.email, password:req.body.password })
  res.json("success")
}

module.exports.deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      id: req.body.id
    }
  });
  res.json("success")
}

module.exports.updateUser = async (req, res) => {
  await User.update({ fname: req.body.fname, lname: req.body.lname, phonenum:req.body.phonenum, email:req.body.email, password:req.body.password }, {
    where: {
      id: req.body.id
    }
  });
  res.json("success")
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