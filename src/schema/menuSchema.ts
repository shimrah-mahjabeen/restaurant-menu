import { buildSchema } from "graphql";

export const menuSchema = buildSchema(`
  type MenuItem {
    name: String!
    description: String
    price: Float
    half_price: Float
    full_price: Float
  }

  type SandwichCategory {
    cold: [MenuItem!]!
    hot: [MenuItem!]!
  }

  type Menu {
    appetizers: [MenuItem!]!
    entrees: [MenuItem!]!
    sandwiches: SandwichCategory!
    soups_and_salads: [MenuItem!]!
    fajitas: [MenuItem!]!
    tacos: [MenuItem!]!
    enchiladas: [MenuItem!]!
  }

  type Query {
    menuItems(category: String): [MenuItem!]!
    fullMenu: Menu! # Ensure this field is included
  }
`);
