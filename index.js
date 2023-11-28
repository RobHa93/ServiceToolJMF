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

app.use(express.json());

app.get("/routes/maschinen_typ", (req, res) => {
  // Logik zum Speichern des Maschinen-Typs implementieren
  res.send("Maschinen-Typ");
});

app.get("/routes/tags", (req, res) => {
  // Logik zum Speichern der Tags implementieren
  res.send("Tags");
});

app.get("/routes/notizen", (req, res) => {
  // Logik zum Speichern der Notizen implementieren
  res.send("Notizen");
});

app.post("/routes/bilder", (req, res) => {
  // Logik zum Speichern der Bilde implementieren
  res.send("Bild hochgeladen");
});
