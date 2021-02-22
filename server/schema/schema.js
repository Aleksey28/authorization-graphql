const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
} = graphql;

const users = [
  {
    id: '1',
    avatar: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    email: 'ivan@yandex.ru',
    firstName: 'Ivan',
    secondName: 'Ivanov',
    age: 25,
    password: '12345qwert',
  },
  {
    id: '2',
    avatar: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    email: 'petrov@yandex.ru',
    firstName: 'Petr',
    secondName: 'Petrov',
    age: 27,
    password: '12345qwert',
  },
  {
    id: '3',
    avatar: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    email: 'foobar@yandex.ru',
    firstName: 'Foo',
    secondName: 'Bar',
    age: 29,
    password: '12345qwert',
  },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    avatar: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    secondName: { type: GraphQLString },
    age: { type: GraphQLInt },
    password: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    userAuth: {
      type: UserType,
      args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
      resolve(parent, { email, password }) {
        return users.find((user) => user.email === email && user.password === password);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
