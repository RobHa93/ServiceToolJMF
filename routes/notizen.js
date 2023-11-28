const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logik eintragen
  res.send("GET request für ein/e Notiz/en");
});

module.exports = router;
