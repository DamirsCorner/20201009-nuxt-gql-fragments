
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Ebook {
    __typename?: 'Ebook';
    id: string;
    author: string;
    title: string;
    pages: number;
}

export interface Audiobook {
    __typename?: 'Audiobook';
    id: string;
    author: string;
    title: string;
    minutes: number;
}

export interface IQuery {
    __typename?: 'IQuery';
    books(): Book[] | Promise<Book[]>;
}

export type Book = Ebook | Audiobook;
