const graphQlHTTP = require("express-graphql");

const express = require("express");

const app = express();

const graphqlSR = require("./graphql");

app.use(
  "/graphql",
  graphQlHTTP({
    schema: graphqlSR.schema,
    rootValue: graphqlSR.resolvers,
    graphiql: true,
    pretty: true
  })
);

app.get("/", (req, res) => {
  return res.redirect("/graphql");
});

app.listen(3000, () => {
  console.log("🚀 Server on http://localhost:3000");
});
