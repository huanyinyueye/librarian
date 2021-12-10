const express = require('express')
const app = express()
const _PORT = 3000
const { getBooks, selectBook, createBook, deleteBook, updateBook } = require('./contollers/book')
const { getUsers, selectUser, createUser, deleteUser, updateUser } = require('./contollers/user')
app.use(express.urlencoded({ extended: true })) // Note: add this to trigger post action
app.set('view engine', 'ejs');

// frontend
app.get('/', function (req, res) {
  res.render('pages/login');
});

app.get('/main', function (req, res) {
  res.render('pages/index');
});

app.get('/book', function (req, res) {
  res.render('pages/book');
});

app.get('/user', function (req, res) {
  res.render('pages/user');
});

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

app.use('/user', usersRouter)

const mainRouter = express.Router()

app.use('/main', mainRouter)

app.listen(_PORT, () => {
  console.log(`Express server is running at http://localhost:${_PORT}`)
})