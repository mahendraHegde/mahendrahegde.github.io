import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://mahi-notification-service.herokuapp.com/query",
  cache: new InMemoryCache(),
});
