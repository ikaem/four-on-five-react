// src\providers\providers.tsx

import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "../apollo/client";

const Providers: React.FC = ({ children }) => {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </Router>
  );
};

export default Providers;
