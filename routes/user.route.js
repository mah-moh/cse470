const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get("/", controller.retrieve);

router.post("/add", controller.add);

module.exports = router;