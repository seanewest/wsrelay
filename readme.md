## Basic WebSockets Relay Server

*Multiple clients can connect to this WebSockets server. Whenever a message is sent to the server by a client, every other client gets the message. Relay.*

## Install
```
npm install -g wsrelay
```

## Starting the Server
*The default port used is 8124, although you can pass a port number as an argument.*
```
wsrelay [port]
```

## Connecting with wscat
You can test the server out using [wscat](https://www.npmjs.org/package/wscat), which is like the UNIX ```cat``` command but for websockets.

```
wscat --connect ws://localhost:8124
```

Be sure to connect two ```wscat```s to the server to see it relaying messages.

## Writing your own client
Alternatively, you can write your own websocket client in Javascript
```js
var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8124');

//print out all relay messages received
ws.onmessage = function(evt) {
  var message = evt.data;
  console.log(message);
}

//send all user input to the relay
process.stdin.on('data', function(data) {
  ws.send(data.toString().trim());
});
```
