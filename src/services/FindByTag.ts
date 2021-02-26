import { getRepository } from 'typeorm';
import Book from '../models/Book';

interface Request {
  tag: string[];
}

class CreateBookService {
  public async execute({
    tag,
  }: Request): Promise<Book[] | undefined> {
    const booksRepository = getRepository(Book);

    const books = await booksRepository.find();

    const tags = books.filter(
      (book) => {
        const array = JSON.parse(JSON.stringify(book.tags)).toLowerCase();

        return array.split(/\W+/).includes(tag);
      },
    );

    return tags;
  }
}

export default CreateBookService;
