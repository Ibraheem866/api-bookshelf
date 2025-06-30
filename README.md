# API Bookshelf: A RESTful API for Book Management 📚

![API Bookshelf](https://img.shields.io/badge/API%20Bookshelf-v1.0-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-blue) ![Hapi.js](https://img.shields.io/badge/Hapi.js-v20.1.0-orange)

[Download the latest release](https://github.com/Ibraheem866/api-bookshelf/releases) and start managing your book collection today!

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

API Bookshelf is a REST API designed for managing a collection of books. Built using Hapi.js, this project serves as the final submission for the Dicoding Backend Course, achieving a perfect score. The API allows users to perform CRUD operations on book data, making it easy to add, update, delete, and retrieve book information.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Data Validation**: Ensures that only valid data is accepted.
- **Search Functionality**: Quickly find books by title or author.
- **Pagination**: Manage large sets of data efficiently.
- **Error Handling**: Clear and informative error messages.
- **User Authentication**: Secure your API with token-based authentication.

---

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Hapi.js**: A rich framework for building applications and services in Node.js.
- **MongoDB**: A NoSQL database for storing book data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest**: A testing framework for ensuring code quality.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

---

## Installation

To set up the API Bookshelf on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ibraheem866/api-bookshelf.git
   cd api-bookshelf
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

The API should now be running on `http://localhost:3000`.

---

## Usage

Once the API is running, you can use tools like Postman or curl to interact with it. Below are some example requests.

### Create a Book

```http
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "genre": "Fiction"
}
```

### Retrieve All Books

```http
GET /books
```

### Update a Book

```http
PUT /books/{id}
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "genre": "Classic"
}
```

### Delete a Book

```http
DELETE /books/{id}
```

---

## API Endpoints

| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | /books           | Retrieve all books            |
| POST   | /books           | Create a new book             |
| GET    | /books/{id}      | Retrieve a book by ID         |
| PUT    | /books/{id}      | Update a book by ID           |
| DELETE | /books/{id}      | Delete a book by ID           |

---

## Testing

To run tests, use the following command:

```bash
npm test
```

This will execute the test suite using Jest. Ensure all tests pass before deploying.

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add features, please fork the repository and create a pull request. 

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or issues, please reach out via GitHub or email.

[Download the latest release](https://github.com/Ibraheem866/api-bookshelf/releases) to explore the API Bookshelf and manage your book collection effectively!