const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/librarian')

class Book extends Model {}
Book.init({
  // id:{ type:DataTypes.INTEGER, primaryKey: true},
  name: DataTypes.STRING,
  author: DataTypes.STRING,
  isbn: DataTypes.STRING
}, { sequelize, modelName: 'Books' });

// SELECT *
module.exports.getBooks = async (req, res) => {
  await sequelize.sync();
  const bks = await Book.findAll();
  res.json(bks)
}

//
module.exports.createBook = async(req, res) => {
  await sequelize.sync();
  console.log(req.body, req.params)
  const aaa = await Book.build({ name:req.body.name, author: req.body.author, isbn: req.body.isbn })
  // const aaa = await Book.create({ name:'a', author: "ass", isbn: "123" })
  res.json(aaa instanceof Book)
  // res.json({ aaa })
}

module.exports.deleteBook = async (req, res) => {
  await Book.destroy({
    where: {
      id: req.body.id
    }
  });
  // res.json({ message: 'Delete ne' })
}

module.exports.updateBook = async (req, res) => {
  await Book.update({ name: req.body.name }, {
    where: {
     id: req.body.id
    }
  });
  // res.json({ message: 'Updatedayo' })
}
module.exports.selectBook = (req, res) => {
  Book.findAll({
    where: {
      id: req.params.bookId
    }
  }).then((bks)=> {
    res.json(bks)
  })
 
}