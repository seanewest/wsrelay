#!/usr/bin/env node

var port = 8124;
if (process.argv.length === 3) {
  port = process.argv[2];
}

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: port});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    wss.clients.forEach(function(elem) {
      if (elem !== ws) {
        elem.send(message);
      }
    })
  });
});

console.log("listening on port " + port + "...");
