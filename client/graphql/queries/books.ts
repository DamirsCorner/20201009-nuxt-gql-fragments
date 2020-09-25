import gql from 'graphql-tag'

export const BOOKS_QUERY = gql`
  query Books {
    books {
      ... on Ebook {
        id
        author
        title
        pages
      }
      ... on Audiobook {
        id
        author
        title
        minutes
      }
    }
  }
`
