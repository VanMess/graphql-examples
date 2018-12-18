import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'Address',
  description: '对象类型的标量',
  serialize(value) {
    return value;
  }
});