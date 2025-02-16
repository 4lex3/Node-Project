import express from 'express'

import { createBook, deleteBook, getBooks, updateBook } from '../controllers/books.js'
import { LoginController } from '../auth/auth.controller.js';
import { MongoCreateBook, MongoDeleteBook, MongoGetBooks, MongoUpdateBook } from '../controllers/mongoBooks.js';

import { AuthMiddleware } from '../auth/auth.js'
const router = express.Router()


//* Auth:
router.post('/api/login', LoginController);


//* MongoDB Controllers
// router.get('/mongo/books', AuthMiddleware, getBooks)
router.get('/mongo/books', MongoGetBooks)
router.post('/mongo/books', MongoCreateBook)
router.put('/mongo/books', MongoUpdateBook)
router.delete('/mongo/books', MongoDeleteBook)


//*Mysql Controllers
router.get('/api/books', getBooks)
router.post('/api/books', createBook)
router.put('/api/books', updateBook)
router.delete('/api/books', deleteBook)


export { router };