# Beet Farm Test Project

Sample AdonisJS and PostgreSQL app containing generic API endpoints.

## Requirements

- Latest Node.js
- Latest PostgreSQL
- Create .env file from .env.example and configure database connection

## Installation

Install project with basic data seeded in the database

```bash
  npm install
  node ace migration:run
  node ace db:seed
  npm run dev
```
## Usage

After the startup app should be accessible in - http://127.0.0.1:3333

## Running Tests

To run tests, run the following command

```bash
  node ace test
```
