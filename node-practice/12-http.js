const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("Here is a short history");
    res.end();
  } else {
    res.write(`
    <h1>Oops!</h1>
    <p>We can't find the page that you are looking for.</p>
    <a href="/">Go back to home</a>
    `);
    res.end();
  }
});

const portNumber = 5000;

server.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
