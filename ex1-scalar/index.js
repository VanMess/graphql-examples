import { graphql, buildSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import schemaDefinition from './schema.gql';

const resolvers = {
	Query: {
		users() {
			return [
				// id 为数值
				{ id: 1, name: "foo", age: 25 },
				// id 为对象
				{ id: { key: 'guid' }, name: 'bar', age: 24 }
			];
		}
	}
};

const server = new ApolloServer({
	typeDefs: schemaDefinition,
	resolvers,
});

export default (app, path) => server.applyMiddleware({ app, path });