const express = require("express");
const authRoute = express.Router();
const authController = require("./authController");

// Main API Front-end Page
authRoute.get("/login", authController.login_get);
authRoute.post("/login", authController.login_post);
authRoute.get("/signup", authController.signup_get);
authRoute.post("/signup", authController.signup_post);

module.exports = authRoute;
