# Contacts API

A simple RESTful API built with **Express.js** and **MongoDB** that allows users to register, log in, and manage their personal contact list.  
Each user can **create**, **read**, **update**, and **delete** their own contacts securely.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JSON Web Tokens (JWT) for user registration and login
- **Password Security:** bcrypt for hashed passwords
- **Development Tools:** nodemon for live reloading, dotenv, express-async-handler, TypeScript (for IntelliSense support)

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/baraa-elhajj/contacts-api.git
cd contacts-api
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the project root:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
```

4. Run the server

```bash
npm run dev
```

---

## Testing the API

You can test all endpoints easily using the included Postman collection json file: `tests/contacts-api.postman_collection.json`

1. Open Postman
2. Import the file
3. Set the `{{base_url}}` environment variable to your api localhost
4. Run requests in order: Register → Login → Contacts CRUD

---

## Contribution

Love this project? **Drop** a star ⭐ and feel free to **fork** it or **suggest improvements** if you find something cool!
