import express from 'express'
import { createBook, deleteBook, getBooks, updateBook } from '../controllers/books.js'
import { AuthMiddleware } from '../auth/auth.js'
import { LoginController } from '../auth/auth.controller.js';

const router = express.Router()


//* Auth:
router.post('/api/login', LoginController);


//* MongoDB Controllers
router.get('/mongo/books', AuthMiddleware, getBooks)
router.post('/mongo/books', createBook)
router.put('/mongo/books', updateBook)
router.delete('/mongo/books', deleteBook)


//*Mysql Controllers
router.get('/api/books', getBooks)
router.post('/api/books', createBook)
router.put('/api/books', updateBook)
router.delete('/api/books', deleteBook)


export { router };