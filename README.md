# Restaurant Menu API

This is a GraphQL API for managing and retrieving restaurant menu data. It supports querying menu items by category, fetching the entire menu structure, and more.

## Features

- Retrieve menu items by category.
- Fetch the full menu, including nested categories.
- GraphQL endpoint with a well-defined schema.
- Comprehensive test suite for API validation.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/restaurant-menu-api.git
   cd restaurant-menu-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   echo "PORT=4000" > .env
   ```

---

## Usage

### Start in Development Mode

Run the server in development mode with automatic reloading:

```bash
npm run dev
```

### Build and Start for Production

1. Build the TypeScript code:

   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

---

## GraphQL API

The GraphQL API is available at:

```
http://localhost:4000/graphql
```

Use a GraphQL client like [GraphiQL](https://github.com/graphql/graphiql) or [Postman](https://www.postman.com/) to interact with the API.

---

### Example Queries

#### 1. Fetch Menu Items by Category

```graphql
query {
  menuItems(category: "appetizers") {
    name
    description
    price
  }
}
```

#### 2. Fetch All Menu Items

```graphql
query {
  menuItems {
    name
    description
    price
  }
}
```

#### 3. Fetch the Full Menu

```graphql
query {
  fullMenu {
    appetizers {
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
  }
}
```

---

## Testing

Run the test suite using Jest to validate the API:

```bash
npm test
```

For development, use the watch mode to automatically run tests on file changes:

```bash
npm run test:watch
```

---

## Project Structure

```
restaurant-menu-api/
├── src/
│   ├── data/
│   │   └── menuData.ts       # Static menu data
│   ├── resolvers/
│   │   └── menuResolver.ts   # GraphQL resolvers
│   ├── schema/
│   │   └── menuSchema.ts     # GraphQL schema
│   ├── index.ts              # Entry point for the server
├── tests/
│   └── api.test.ts           # Jest test cases
├── package.json              # Node.js dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest configuration
└── README.md                 # Documentation
```

---

## Scripts

- **`npm run dev`**: Run the server in development mode with auto-reloading.
- **`npm run build`**: Compile TypeScript to JavaScript.
- **`npm start`**: Start the production server.
- **`npm test`**: Run the test suite with Jest.
- **`npm run test:watch`**: Run tests in watch mode.
- **`npm run clean`**: Remove the build output directory.

---

## Dependencies

### Production

- **[express](https://expressjs.com/)**: Web framework for Node.js.
- **[graphql](https://graphql.org/)**: GraphQL query language and runtime.
- **[express-graphql](https://github.com/graphql/express-graphql)**: Middleware for integrating GraphQL with Express.

### Development

- **[typescript](https://www.typescriptlang.org/)**: Strongly typed JavaScript.
- **[jest](https://jestjs.io/)**: Testing framework.
- **[supertest](https://github.com/visionmedia/supertest)**: HTTP assertions for testing.
- **[ts-jest](https://kulshekhar.github.io/ts-jest/)**: Jest plugin for TypeScript.
