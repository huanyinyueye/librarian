const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')

class Book extends Model { }
Book.init({
  // id:{ type:DataTypes.INTEGER, primaryKey: true},
  name: DataTypes.STRING,
  author: DataTypes.STRING,
  isbn: DataTypes.STRING
}, { sequelize, modelName: 'Books' });

module.exports.getBooks = async (req, res) => {
  await sequelize.sync();
  const bks = await Book.findAll();
  res.json(bks)
}

module.exports.createBook = async (req, res) => {
  await sequelize.sync();
  const aaa = await Book.create({ name: req.body.name, author: req.body.author, isbn: req.body.isbn })
  res.json("success")
}

module.exports.deleteBook = async (req, res) => {
  await Book.destroy({
    where: {
      id: req.body.id
    }
  });
  res.json("success")
}

module.exports.updateBook = async (req, res) => {
  await Book.update({ name: req.body.name, author: req.body.author, isbn: req.body.isbn }, {
    where: {
      id: req.body.id
    }
  });
  res.json("success")
}

module.exports.selectBook = (req, res) => {
  Book.findAll({
    where: {
      id: req.params.bookId,
    }
  }).then((bks) => {
    res.json(bks)
  })
}