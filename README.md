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
  
 - Copy .env.example and rename to .env
 - change postgres db url to yours
  
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
  - Make sure to create user with your username and password before using the schema or get the username from db with "admin" as the password, like in this image below 
![image](https://user-images.githubusercontent.com/17559233/180842377-b918b689-84c3-45e5-a09c-c1468157e999.png)
  - then you can get users query or do mutation to create, update and delete ![image](https://user-images.githubusercontent.com/17559233/180842895-b1dfe8ac-c4a3-49e2-8997-45944ff0429a.png)






