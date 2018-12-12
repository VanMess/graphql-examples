import { graphql, buildSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import schemaDefinition from './scheme.gql';

const resolvers = {
  NamedEntity: {
    __resolveType() {
      return 'User';
    }
  },
  Query: {
    users() {
      return [
        { id: 1, name: "foo", age: 1 },
        { id: 2, name: 'bar', age: 1 }
      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemaDefinition,
  resolvers,
});

export default (app, path) => server.applyMiddleware({ app, path });