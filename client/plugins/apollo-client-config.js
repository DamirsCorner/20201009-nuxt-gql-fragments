import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'

import introspectionQueryResultData from '../graphql/introspection.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default function (_context) {
  return {
    httpEndpoint: 'http://localhost:3000/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}
