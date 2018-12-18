import { graphql, buildSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import schemaDefinition from './schema.gql';
import GraphQLDatetimeType from './Datetime';
import GraphQLAddressType from './Address';

const resolvers = {
  Datetime: GraphQLDatetimeType,
  Address: GraphQLAddressType,
  Query: {
    users(p, arg) {
      const { before } = arg;
      return [{
          id: 1,
          name: "foo",
          createDatetime: new Date(),
          bornOrigin: {
            city: '深圳',
            province: '广东省',
            country: '中国'
          }
        },
        {
          id: 1,
          name: 3,
          createDatetime: new Date('1991', '02', '19'),
          bornOrigin: {
            city: '深圳',
            province: '广东省',
            country: '中国'
          }
        },
        {
          id: 1,
          name: 3,
          createDatetime: new Date('2018', '02', '19'),
          bornOrigin: {
            city: '深圳',
            province: '广东省',
            country: '中国'
          }
        }
      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemaDefinition,
  resolvers,
});

export default (app, path) => server.applyMiddleware({ app, path });