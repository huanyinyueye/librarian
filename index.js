const express = require('express')
const app = express()
const _PORT = 3000
const { getBooks, selectBook, createBook, deleteBook, updateBook } = require('./contollers/book')
const booksRouter = express.Router()
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://user:postgres:5432/librarian')


booksRouter.route('/').get(getBooks).post(createBook)
booksRouter.get('/:bookId', selectBook).post(selectBook)



app.use('/book', booksRouter)
app.get(createBook)
app.get(deleteBook)
app.get(updateBook)

app.get('/health', (req, res) => {
  res.json({ message: 'ok!' })
})
app.listen(_PORT, () => {
  console.log(`Express server is running at http://localhost:`+_PORT)
})