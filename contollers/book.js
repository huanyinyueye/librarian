const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')

class Book extends Model { }
Book.init({
  name: DataTypes.STRING,
  author: DataTypes.STRING,
  isbn: DataTypes.STRING,
  // bookstat: DataTypes.ENUM('Available', 'Maintenance', 'Loaned', 'Reserved'),
  // due_back: DataTypes.DATE
}, { sequelize, modelName: 'Books' });

module.exports.getBooks = async (req, res) => {
  //await sequelize.sync(); 
  //When database didn't have table, use "sequelize.sync()";
  const bks = await Book.findAll();
  res.json(bks)
}

module.exports.createBook = async (req, res) => {
  //await sequelize.sync();
  const aaa = await Book.create({ name: req.body.name, author: req.body.author, isbn: req.body.isbn })
  res.redirect('/book');
}

module.exports.deleteBook = async (req, res) => {
  await Book.destroy({
    where: {
      id: req.body.id
    }
  });
  res.redirect('/book');
}

module.exports.updateBook = async (req, res) => {
  await Book.update({ name: req.body.name, author: req.body.author, isbn: req.body.isbn }, {
    where: {
      id: req.body.id
    }
  });
  res.redirect('/book');
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