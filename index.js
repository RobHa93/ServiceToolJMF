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
