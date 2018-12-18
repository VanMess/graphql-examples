import { graphql, buildSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import schemaDefinition from './schema.gql';

const resolvers = {
	NamedEntity: {
		__resolveType(p) {
			return !!p.age ? 'User' : 'Administrator';
		}
	},
	Query: {
		profiles() {
			return [
				{ id: 1, name: "foo", age: 25 },
				{ id: 2, name: 'bar', age: 24 },
				{ id: 3, name: "foo" }
			];
		}
	}
};

/**
 * 
 * 查询实例： 
 * 
 * {
    profiles {
      name
      ... on User {
        age
      }
    } 
  }
 * 
 */

const server = new ApolloServer({
	typeDefs: schemaDefinition,
	resolvers,
});

export default (app, path) => server.applyMiddleware({ app, path });