const http = require("http");
const finalhandler = require("finalhandler");
const serveStatic = require("serve-static");

const staticFiles = serveStatic(__dirname + "/html");
const server = http.createServer(function onRequest(req, res) {
  staticFiles(req, res, finalhandler(req, res));
});

function serve() {
  return new Promise(resolve => {
    server.listen(5000, function() {
      console.log("Test server running on http://localhost:5000/");
      resolve();
    });
  });
}

function close() {
  server.close();
}

module.exports = {
  serve,
  close
};
