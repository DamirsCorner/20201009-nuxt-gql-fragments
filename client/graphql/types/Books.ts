/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Books
// ====================================================

export interface Books_books_Ebook {
  __typename: "Ebook";
  id: string;
  author: string;
  title: string;
  pages: number;
}

export interface Books_books_Audiobook {
  __typename: "Audiobook";
  id: string;
  author: string;
  title: string;
  minutes: number;
}

export type Books_books = Books_books_Ebook | Books_books_Audiobook;

export interface Books {
  books: Books_books[];
}
