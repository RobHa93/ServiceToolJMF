const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logik eintragen
  res.send("GET request for Tags");
});

module.exports = router;
