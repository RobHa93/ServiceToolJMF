const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logik eintragen
  res.send("GET request für Bilder upload");
});

module.exports = router;
