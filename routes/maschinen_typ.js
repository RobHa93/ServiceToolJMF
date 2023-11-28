const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Logik eintragen
  res.send("GET request für den Maschinen Typ");
});

module.exports = router;
