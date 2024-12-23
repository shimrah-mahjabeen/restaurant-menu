import request from "supertest";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { menuSchema } from "../src/schema/menuSchema";
import { menuResolver } from "../src/resolvers/menuResolver";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: menuSchema,
    rootValue: menuResolver,
    graphiql: false,
  })
);

describe("GraphQL Restaurant Menu API Tests", () => {
  it("should fetch menu items for a valid category", async () => {
    const query = `
      query {
        menuItems(category: "appetizers") {
          name
          price
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.menuItems).toBeInstanceOf(Array);
    expect(response.body.data.menuItems).toHaveLength(5);
    expect(response.body.data.menuItems[0]).toHaveProperty("name");
    expect(response.body.data.menuItems[0]).toHaveProperty("price");
  });

  it("should fetch all menu items when no category is specified", async () => {
    const query = `
      query {
        menuItems {
          name
          price
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.menuItems).toBeInstanceOf(Array);
    expect(response.body.data.menuItems.length).toBeGreaterThan(0);
  });

  it("should fetch the entire menu structure", async () => {
    const query = `
      query {
        fullMenu {
          appetizers {
            name
            price
          }
          entrees {
            name
            price
          }
          sandwiches {
            cold {
              name
              half_price
              full_price
            }
            hot {
              name
              price
            }
          }
          soups_and_salads {
            name
            price
          }
          fajitas {
            name
            price
          }
          tacos {
            name
            price
          }
          enchiladas {
            name
            price
          }
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.fullMenu).toHaveProperty("appetizers");
    expect(response.body.data.fullMenu).toHaveProperty("entrees");
    expect(response.body.data.fullMenu).toHaveProperty("sandwiches");
    expect(response.body.data.fullMenu.sandwiches).toHaveProperty("cold");
    expect(response.body.data.fullMenu.sandwiches).toHaveProperty("hot");
  });

  it("should return an empty array for an invalid category", async () => {
    const query = `
      query {
        menuItems(category: "desserts") {
          name
          price
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.menuItems).toEqual([]);
  });

  it("should return an error for a missing field in a query", async () => {
    const query = `
      query {
        menuItems {
          nonExistentField
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toContain(
      'Cannot query field "nonExistentField"'
    );
  });

  it("should return an error for a missing query field", async () => {
    const query = `
      query {
        invalidField {
          name
        }
      }
    `;

    const response = await request(app).post("/graphql").send({ query });
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toContain(
      'Cannot query field "invalidField" on type "Query".'
    );
  });
});
