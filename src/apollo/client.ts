// src\apollo\index.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const uri = process.env.REACT_APP_GRAPHQL_URI;

console.log("uri here", uri);

console.log("env var", process.env.REACT_APP_GRAPHQL_URI);

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

export default client;
