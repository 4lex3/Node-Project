import express from 'express'

import { createBook, deleteBook, getBooks, updateBook } from '../controllers/books.js'
import { LoginController } from '../auth/auth.controller.js';
import { MongoCreateBook, MongoDeleteBook, MongoGetBooks, MongoUpdateBook } from '../controllers/mongoBooks.js';

import { AuthMiddleware } from '../auth/auth.js'
const router = express.Router()


//* Auth:
router.post('/api/login', LoginController)


//* MongoDB Controllers
router.get('/mongo/books', AuthMiddleware, MongoGetBooks);
router.post('/mongo/books', AuthMiddleware, MongoCreateBook);
router.put('/mongo/books', AuthMiddleware, MongoUpdateBook);
router.delete('/mongo/books', AuthMiddleware, MongoDeleteBook);


//*Mysql Controllers
router.get('/api/books', AuthMiddleware, getBooks);
router.post('/api/books', AuthMiddleware, createBook);
router.put('/api/books', AuthMiddleware, updateBook);
router.delete('/api/books', AuthMiddleware, deleteBook);


export { router };