import { getRepository } from 'typeorm';
import Book from '../models/Book';

class DeleteBookService {
  public async execute(id: string): Promise<void> {
    const booksRepository = getRepository(Book);

    const book = await booksRepository.findOne(id);

    if (!book) {
      throw new Error('This book does not exists');
    }

    await booksRepository.remove(book);
  }
}

export default DeleteBookService;
