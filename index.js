var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('You are in AWS Cloud. This is TECHESSAY. Please share, subscribe, and like my videos.'); // Write a response to the client
  res.end(); // End the response
}).listen(5000); // The server object listens on port 5000
