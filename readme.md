## Basic WebSockets Relay Server

*Multiple clients can connect to this WebSockets server. Whenever a message is sent to the server by a client, every other client gets the message. Relay.*

## Install
```
npm install -g seanewest/wsrelay
```

## Usage
*The default port used is 8124, although you can pass a port number as an argument.*
```
wsrelay [port]
```

Now you can connect to this server from any websockets client.

You can test the server out using [wscat](https://www.npmjs.org/package/wscat), which is like the UNIX ```cat``` command but for websockets.

```
wscat --connect ws://localhost:8124
```

Be sure to connect two ```wscat```s to the server to make see it relaying messages.
