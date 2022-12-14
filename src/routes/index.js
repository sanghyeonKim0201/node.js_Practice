"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/index.js");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);
router.get("/sign", ctrl.output.sign);
router.post("/sign", ctrl.process.sign);

module.exports = router;