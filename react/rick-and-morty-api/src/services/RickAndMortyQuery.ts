import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_RICK_AND_MORTY_URL,
  cache: new InMemoryCache(),
});

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        next
      }
      results {
        id
        name
        image
        episode {
          id
        }
      }
    }
  }
`;
