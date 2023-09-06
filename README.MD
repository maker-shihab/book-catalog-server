# Book Catalog Application Server

## Introduction

The "Book Catalog Application Server" is the backend component of our Book Catalog application. It provides the necessary functionality for managing and organizing your book collection. This server is built using Node.js, Express, Mongoose, and TypeScript, making it a reliable and efficient backend solution for your book cataloging needs.

## Live link:

[Book Catalog Application](https://book-catalog-server-sand.vercel.app)

## Features

- **API Endpoints:** Define and manage your book catalog with a range of API endpoints.
- **Database Integration:** Seamlessly connect to a MongoDB database to store and retrieve book data.
- **Authentication:** Implement user authentication and authorization for secure access.
- **Validation:** Utilize input validation and error handling to ensure data integrity.
- **Scalability:** Designed with scalability in mind, allowing your catalog to grow.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB server installed and running.

## Getting Started

Follow these steps to set up and run the server locally:

1. Clone the repository: `git clone https://github.com/maker-shihab/book-catalog-server.git`
2. Install dependencies: `npm install`
3. Configure environment variables (if necessary).
4. Start the server: `npm start`
5. Access the API at `api/v1/book` by default.

## API Documentation

### Book:

```json
{
  "title": "Example Title",
  "author": "64f87b2b54aa9e09c9608df6",
  "genre": "Example Genre",
  "publicationDate": "2023-09-06"
}
```

### User:

```json
{
  "userName": "exampleName",
  "phoneNumber": "123-456-7890",
  "email": "example@email.com",
  "gender": "male",
  "password": "examplePassword",
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "address": "123 Main Street"
}
```

### WishList:

```json
{
  "book": "book_id_here",
  "userId": "user_id_here",
  "date": "2023-09-07"
}
```

## Environment Variables

List and explain the environment variables used in the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
