const express = require("express"),
  router = express.Router(),
  authController = require("../controllers/auth.controller");

router.post("/register", authController.postAuthRegister);

module.exports = router;
