import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const Dataloader = require("dataloader");

const posts = [
  { id: 1, title: 'A post', text: 'Some text', views: 2, author_id: 1 },
  { id: 2, title: 'B post', text: 'Some other text', views: 5, author_id: 1 },
  { id: 3, title: 'C post', text: 'Some other text 2', views: 5, author_id: 2 },
]

const getPostsBatch = (keys) => {
  console.log(1);
  return Promise.resolve(keys.map(key => posts.filter(post => post.author_id === key)));
}

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use(
  '/graphql', 
  bodyParser.json(), 
  graphqlExpress(
    (req) => { 
      console.log(2);
      return { schema, context: { postsLoader: new Dataloader(keys => getPostsBatch(keys)) } }
    }
  )
);
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
