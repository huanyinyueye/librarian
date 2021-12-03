const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:postgres:5432/librarian') // Example for postgres

const Book = sequelize.define("book", {
  name: DataTypes.TEXT,
  author: DataTypes.TEXT,
  isbn: DataTypes.TEXT
});

Sequelize.sync().then(()=>{
  User.create({
    name: 'Heidi',
    author: 'jfaqdw',
    isbn: '31271349146'
  }).then(() => {
    console.log('successfully created!!') 
  });
});
const book = User.build({ name: "book1" });
await book1.save();

