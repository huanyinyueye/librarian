const { Sequelize, DataTypes } = require("sequelize/dist")
const sequelize = new Sequelize('postgres://user:postgres:5432/librarian')

const Book = sequelize.define('book', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  isbn:{
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});



module.exports.getBooks = (req, res) => {
  res.json({ message: 'Get all books' })
}
module.exports.createBook = (req, res) => {
  const aaa = Book.build({ name: "aaa", author: "bbb", isbn: "14618411312" })
  // res.json(aaa instanceof User)
  res.json({ aaa })
}

module.exports.deleteBook = (req, res) => {
  aaa.destroy();
  res.json({ aaa })
}

module.exports.updateBook = (req, res) => {
  res.json({ message: 'Updatedayo' })
}
module.exports.selectBook = (req, res) => {
  res.json({ message: 'Get a book by ID: ' + req.params.bookId })
}


//https://sequelize.org/master/manual/model-instances.html
