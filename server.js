const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
connectDb();

// To accept json request bodies
app.use(express.json());

// To include all routes from contactRoutes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// To use errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
