const express = require('express')
const app = express()
const _PORT = 3000
const { getBooks, selectBook, createBook, deleteBook, updateBook } = require('./contollers/book')
app.use(express.urlencoded({ extended: true })) // Note: add this to trigger post action

// frontend
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './static/' })
})

// backend
const booksRouter = express.Router()

booksRouter.route('/').get(getBooks).post(createBook)
booksRouter.route('/delete').post(deleteBook)
booksRouter.route('/update').post(updateBook)
booksRouter.get('/:bookId', selectBook)

app.use('/book', booksRouter)

app.listen(_PORT, () => {
  console.log(`Express server is running at http://localhost:` + _PORT)
})