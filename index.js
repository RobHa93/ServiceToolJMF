//Server erstellen
import http from "http";

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("My first server!");
});

server.listen(port, host, () => {
  console.log(`Server is running at ${host}:${port}`);
});

//Hauptfunktionen abrufen

const express = require("express");
const app = express();

const bilderRoutes = require("./routes/bilder.js");
const maschinenTypRoutes = require("./routes/maschinen_typ.js");
const notizenRoutes = require("./routes/notizen.js");
const tagsRoutes = require("./routes/tags.js");

// Funktion aus "routes" verwenden
app.use("/bilder", bilderRoutes);
app.use("/maschinen_typ", maschinenTypRoutes);
app.use("/notizen", notizenRoutes);
app.use("/tags", tagsRoutes);
