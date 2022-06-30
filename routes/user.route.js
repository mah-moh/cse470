const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get("/", controller.get)

router.post("/add", controller.add);