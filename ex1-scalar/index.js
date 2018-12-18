import { graphql, buildSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import schemaDefinition from './schema.gql';

const resolvers = {
  Datetime: {
    resolveType() {}
  },
  Query: {
    users() {
      return [
        { id: 1, name: "foo", age: 25 },
        { id: 1, name: 3, age: 24 },
        { id: 1.2, name: 3, age: 24 }
      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemaDefinition,
  resolvers,
});

export default (app, path) => server.applyMiddleware({ app, path });