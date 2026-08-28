# Mini Message Board

A full-stack message board application built with **Node.js, Express, EJS, and PostgreSQL**.

Users can create messages, view messages posted by others, and delete messages through a simple server-rendered interface. The project demonstrates backend routing, MVC-style application organization, relational database integration, asynchronous database queries, and deployment of a Node.js web application.

🌐 **Live Demo:** https://mini-message-board-06g1.onrender.com/
💻 **Repository:** https://github.com/Yohan-Abraham/mini-message-board

---

## Features

* View all messages stored in a PostgreSQL database
* Create and publish new messages
* Store the author's name and message date
* Delete individual messages
* Server-side rendering using EJS
* Persistent PostgreSQL data storage
* Parameterized SQL queries
* Modular Express routing
* Separated controllers and database logic
* Environment-based database configuration
* Responsive styling with custom CSS
* Deployed as a full-stack web application

---

## Tech Stack

### Backend

* **Node.js** — JavaScript runtime
* **Express.js** — web application framework
* **PostgreSQL** — relational database
* **node-postgres (`pg`)** — PostgreSQL client for Node.js

### Frontend

* **EJS** — server-side templating
* **HTML5**
* **CSS3**

### Development & Deployment

* **dotenv** — environment variable management
* **Git & GitHub** — version control
* **Render** — application deployment

---

## Application Architecture

The project follows a modular, MVC-inspired structure that separates routing, request handling, database access, presentation, and static assets.

```text
mini-message-board/
│
├── controllers/
│   ├── deleteController.js
│   ├── indexController.js
│   └── newController.js
│
├── models/
│   ├── message.js
│   ├── pool.js
│   ├── populatedb.js
│   └── queries.js
│
├── public/
│   └── ...
│
├── routes/
│   ├── index.js
│   └── new.js
│
├── views/
│   ├── form.ejs
│   └── ...
│
├── app.js
├── package.json
└── README.md
```

### Request Flow

```text
Browser
   │
   ▼
Express Route
   │
   ▼
Controller
   │
   ▼
Database Query
   │
   ▼
PostgreSQL
   │
   ▼
Controller
   │
   ▼
EJS View
   │
   ▼
Browser
```

This structure keeps responsibilities separated and makes the application easier to maintain and extend.

---

## Database

Messages are persisted in PostgreSQL rather than stored in application memory.

A message contains information similar to:

| Field     | Description                               |
| --------- | ----------------------------------------- |
| `id`      | Unique identifier for the message         |
| `message` | Message content                           |
| `author`  | Name of the person who posted the message |
| `date`    | Date the message was created              |

Database operations are isolated inside the model/query layer.

For example, the application supports:

```sql
SELECT * FROM messages;
```

```sql
INSERT INTO messages (message, author, date)
VALUES ($1, $2, CURRENT_DATE);
```

```sql
DELETE FROM messages
WHERE id = $1;
```

Parameterized SQL queries are used when inserting and deleting data instead of directly interpolating user input into SQL statements.

---

## Routes

The application exposes routes for the primary message-board operations.

| Method | Route         | Description                  |
| ------ | ------------- | ---------------------------- |
| `GET`  | `/`           | Display all messages         |
| `GET`  | `/new`        | Display the new-message form |
| `POST` | `/new`        | Create a new message         |
| `POST` | `/delete/:id` | Delete a message             |

---

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* PostgreSQL
* Git

---

### 1. Clone the repository

```bash
git clone https://github.com/Yohan-Abraham/mini-message-board.git
```

Move into the project directory:

```bash
cd mini-message-board
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure PostgreSQL

Create a PostgreSQL database for the project.

The application expects database connection information to be supplied through environment variables.

Create a `.env` file in the root directory:

```env
HOST=localhost
USER=your_postgres_username
NAME=your_database_name
PORT=5432
```

> Never commit your real `.env` file or database credentials to source control.

---

### 4. Create the messages table

Create the required table in PostgreSQL:

```sql
CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE
);
```

---

### 5. Start the application

```bash
node app.js
```

Then visit:

```text
http://localhost:3000
```

---

## What I Learned

Building this project helped strengthen my understanding of full-stack web development with Node.js, particularly:

* Building a web server with Express
* Creating modular Express routers
* Understanding HTTP `GET` and `POST` requests
* Processing HTML form data using `req.body`
* Working with dynamic URL parameters using `req.params`
* Separating routes, controllers, views, and database logic
* Rendering dynamic pages with EJS
* Connecting Node.js applications to PostgreSQL
* Writing asynchronous database operations
* Using parameterized SQL queries
* Persisting application data in a relational database
* Managing configuration through environment variables
* Deploying a database-backed Node.js application

One of the most valuable parts of the project was moving from an in-memory message board to persistent PostgreSQL storage while maintaining a clean separation between the HTTP layer and database layer.

---

## Potential Improvements

Future versions of the application could include:

* User authentication and accounts
* Edit-message functionality
* Input validation and sanitization
* Authentication-based delete permissions
* Timestamps instead of date-only values
* Pagination for larger message collections
* Search and filtering
* Automated testing
* Improved error handling
* REST API endpoints
* CSRF protection
* Rate limiting
* Production logging

---

## Project Purpose

This project was built as part of my backend development learning to practice the fundamentals behind server-rendered, database-backed applications.

Rather than keeping application data in a JavaScript array, this version persists messages in PostgreSQL and separates database operations from routing and controller logic.

The goal was to develop a stronger understanding of how a request travels through a real web application:

**HTTP request → route → controller → database → view → response**

---

## Author

**Yohan Abraham**

GitHub: https://github.com/Yohan-Abraham

---

## Acknowledgements

Built while studying full-stack JavaScript development and backend application architecture.
