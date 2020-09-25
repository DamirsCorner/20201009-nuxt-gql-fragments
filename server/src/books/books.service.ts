import { Injectable } from '@nestjs/common';
import { Book } from 'src/graphql';

const books: Book[] = [
  {
    __typename: 'Ebook',
    id: '9780765397522',
    author: 'Martha Wells',
    title: 'All Systems Red',
    pages: 144,
  },
  {
    __typename: 'Audiobook',
    id: 'B01L082HJ2',
    author: 'Dennis E. Taylor',
    title: 'We Are Legion (We Are Bob)',
    minutes: 9 * 60 + 56,
  },
];

@Injectable()
export class BooksService {
  findAll(): Book[] {
    return books;
  }
}
