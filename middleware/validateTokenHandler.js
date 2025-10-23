const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// @ts-ignore
const validateTokenHandler = asyncHandler((req, res, next) => {
  let authHeader = req.headers.Authorization || req.headers.authorization;
  let token = authHeader?.toString().split(" ")[1];

  if (!authHeader || !authHeader.toString().startsWith("Bearer") || !token) {
    res.status(401);
    throw new Error("User is Unauthorized.");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "", (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("User is Unauthorized.");
    }

    // @ts-ignore
    req.user = decoded.user;
    next();
  });
});

module.exports = validateTokenHandler;
