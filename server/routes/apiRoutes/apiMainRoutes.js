const express = require("express");
const router = express.Router();
const apiMainController = require("../../controllers/apiMainController");

// Dentro de localhost:3000/api/main

router.get('/list', apiMainController.list);
router.get('/detail/:id', apiMainController.detail);

module.exports = router;