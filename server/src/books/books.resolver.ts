import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query()
  async books() {
    return this.booksService.findAll();
  }
}
