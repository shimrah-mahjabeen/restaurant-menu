import express from "express";
import { graphqlHTTP } from "express-graphql";
import { menuSchema } from "./schema/menuSchema";
import { menuResolver } from "./resolvers/menuResolver";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: menuSchema,
    rootValue: menuResolver,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`GraphQL API is running at http://localhost:${PORT}/graphql`);
});
