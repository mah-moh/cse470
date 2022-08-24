const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.post("/add", controller.createUser);

router.post("/varify", controller.varifyUser);

router.post("/getuser", controller.getUser);

router.patch("/:id", controller.updateUrl);

module.exports = router;