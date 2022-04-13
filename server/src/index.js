const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  /*To connect our server with our TrackAPI, we'll add the dataSources key.
  // This is what enables us to access the dataSources.trackAPI (and its methods)
  // from the context parameter of our resolvers.
  // Apollo Server takes care of all the plumbing for us, pretty neat!*/
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
