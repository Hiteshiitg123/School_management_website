// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { createGuest } = require("../controllers/guest");

// POST request to create a new user
router.route("/").post(createGuest);

module.exports = router;
