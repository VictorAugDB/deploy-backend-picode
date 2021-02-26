import { getRepository } from 'typeorm';
import Book from '../models/Book';

interface Request {
  title: string,
  author: string;
  description: string;
  pages: number;
  tags: string[];
}

class CreateBookService {
  public async execute({
    title, author, description, pages, tags,
  }: Request): Promise<Book> {
    const booksRepository = getRepository(Book);

    const book = booksRepository.create({
      title,
      author,
      description,
      pages,
      tags,
    });

    await booksRepository.save(book);

    return book;
  }
}

export default CreateBookService;
