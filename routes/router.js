const express = require("express"),
  router = express.Router(),
  indexRoute = require("./index.route"),
  authRoute = require("./auth.route");

router.get("/", indexRoute);
router.post("/api/auth", authRoute);
// 404
router.get("*", function (req, res, next) {
  res.status(404);
  res.json({ message: "Page introuvable" });
});
module.exports = router;
