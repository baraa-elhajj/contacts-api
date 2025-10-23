const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// @ts-ignore
const validateTokenHandler = asyncHandler((req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.toString().startsWith("Bearer")) {
    token = authHeader.toString().split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "", (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is Unauthorized.");
      }
      console.log(decoded);
    });
  }
});

module.exports = validateTokenHandler;
