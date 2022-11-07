"use strict";

const express = require("express");
const router = express.Router();

router.get("/", home);

router.get("/login", login);

module.exports = router;