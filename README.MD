# Book Catalog Project

An online book catalog application built with TypeScript, Express, and MongoDB for managing and exploring a collection of books.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new books to the catalog
- List all books in the catalog
- View details of a specific book
- Update book information
- Remove books from the catalog
- Cross-Origin Resource Sharing (CORS) enabled
- Secure application with various HTTP headers using Helmet
- Logging middleware for requests using Morgan

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-catalog-project.git
   cd book-catalog-project
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Configure environment variables:

   Create a .env file in the root directory and set the following variables:

   ```bash
   MONGODB_URI=your-mongodb-connection-string
   ```

## Usage

### Start the application:

```bash
yarn install
```

The server will run on http://localhost:5000.

## API Endpoints

- GET /api/books: Get a list of all books.
- GET /api/books/:id: Get details of a specific book.
- POST /api/books: Add a new book to the catalog.
- PUT /api/books/:id: Update details of a book.
- DELETE /api/books/:id: Delete a book from the catalog.

Refer to the API documentation for detailed request and response formats.

## Technologies Used

- Express.js
- Mongoose
- CORS
- Body Parser
- Helmet
- Morgan
- TypeScript

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

- Fork the repository.
- Create a new branch: git checkout -b feature-name.
- Make your changes and commit: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature-name.
- Open a pull request.

## License

This project is licensed under the MIT License.
