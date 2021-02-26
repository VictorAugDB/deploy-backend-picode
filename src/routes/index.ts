import { Router } from 'express';
import booksRouter from './books.routes';

const routes = Router();

routes.use('/books', booksRouter);

export default routes;
