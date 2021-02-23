const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, (err) => (err ? console.log(err) : console.log(`Server started on port - ${PORT}`)));
