import { Router } from 'express';
import { getRepository } from 'typeorm';
import Book from '../models/Book';

import CreateBookService from '../services/CreateBookService';
import DeleteBookService from '../services/DeleteBook';
import FindByTag from '../services/FindByTag';

const booksRouter = Router();

booksRouter.get('/', async (request, response) => {
  try {
    const booksRepository = getRepository(Book);

    const books = await booksRepository.find();

    return response.json(books);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

booksRouter.get('/esp', async (request, response) => {
  try {
    const { tag } = request.query;

    const findBooks = new FindByTag();

    const books = await findBooks.execute({
      tag: String(tag),
    });

    return response.json(books);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

booksRouter.post('/', async (request, response) => {
  try {
    const {
      title, author, description, pages, tags,
    } = request.body;

    const createBook = new CreateBookService();

    const book = await createBook.execute({
      title,
      author,
      description,
      pages,
      tags,
    });

    return response.json(book);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

booksRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteBook = new DeleteBookService();

    await deleteBook.execute(id);

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default booksRouter;
