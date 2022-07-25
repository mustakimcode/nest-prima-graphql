### Implementing a GraphQL API using Prisma, NestJS, and PostgreSql.

This project involves a simple users graphql API implementing CRUD functionalities.

#### Step by step guide
- Node.js installed.
- Then run `npm install -g typescript` to install typescript.

- Install the necessary dependencies:

  ```bash
  cd nest-prima-graphql
  ```

  ```bash
  npm install
  ```
  
  - Create db tables  
  ```bash
  npx prisma migrate dev --name init_user_table
  ```

  - Generate User datas
  ```bash
  npm run seed  
  ```
  
  - Generate Graphql type classes
  ```bash
  npm run generate:graphql:classes
  ```

- Start the project:

  ```bash
  npm run start:dev
  ```

- Explore the API using Postman from [here](https://www.getpostman.com/collections/429ed2106370a091777f)

- Make sure select authentication using basic auth with admin as username and admin as password

