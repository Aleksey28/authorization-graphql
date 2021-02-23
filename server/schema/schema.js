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
    avatar: 'https://sib100.ru/wp-content/uploads/2018/10/Buriy-misha_4.jpg',
    email: 'ivan@yandex.ru',
    firstName: 'Ivan',
    secondName: 'Ivanov',
    age: 25,
    password: '12345qwert',
  },
  {
    id: '2',
    avatar: 'https://sib100.ru/wp-content/uploads/2018/10/Buriy-misha_4.jpg',
    email: 'petrov@yandex.ru',
    firstName: 'Petr',
    secondName: 'Petrov',
    age: 27,
    password: '12345qwert',
  },
  {
    id: '3',
    avatar: 'https://sib100.ru/wp-content/uploads/2018/10/Buriy-misha_4.jpg',
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
    users: {
      type: UserType,
      resolve() {
        return users[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
