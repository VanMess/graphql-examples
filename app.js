import express from 'express';
import path from 'path';

const log = require('debug')('gql-example:web');
const port = 4000;
const examples = ['ex3-interface', 'ex1-scalar']

const app = express();

for (const name of examples) {
  const route = `/gql/${name}`;
  require(path.join(__dirname, name, 'index.js')).default(app, route);
  log(`GraphQL example mount at: ${route}`);
}

app.listen(port, () => log(`Application listen at ${port}, and you can visit http://localhost:${port} to access contents now.`));