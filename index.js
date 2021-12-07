const express = require('express')
const app = express()
const _PORT = 3000
const { getBooks, selectBook, createBook, deleteBook, updateBook } = require('./contollers/book')
const { getUsers, selectUser, createUser, deleteUser, updateUser } = require('./contollers/user')
app.use(express.urlencoded({ extended: true })) // Note: add this to trigger post action

// frontend
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: './static/' })
})

app.get('/book', function (req, res) {
  res.sendFile('book.html', { root: './static/' })
})
app.get('/user', function (req, res) {
  res.sendFile('user.html', { root: './static/' })
})

// backend
const booksRouter = express.Router()

booksRouter.route('/book').get(getBooks).post(createBook)
booksRouter.route('/book/delete').post(deleteBook)
booksRouter.route('/book/update').post(updateBook)
booksRouter.get('/book/:bookId', selectBook)

app.use('/book', booksRouter)

const usersRouter = express.Router()

usersRouter.route('/user').get(getUsers).post(createUser)
usersRouter.route('/user/delete').post(deleteUser)
usersRouter.route('/user/update').post(updateUser)
usersRouter.get('/user/:userId', selectUser)

app.use('/user',usersRouter)

app.listen(_PORT, () => {
  console.log(`Express server is running at http://localhost:${_PORT}`)
})