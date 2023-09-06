import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
const router = express.Router();

router.post(
  '/create',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
router.get('/latest', BookController.getLatesBooks);

router.get('/:id', BookController.getSingleBook);
router.patch('/:id', BookController.updateBook);
router.patch('/review/:id', BookController.bookReview);
router.delete('/:id', BookController.deleteBook);

router.get('/', BookController.getAllBooks);

export const BookRoutes = router;
