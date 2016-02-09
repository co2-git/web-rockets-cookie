web-rockets-cookie
===

Use HTTP(s) cookies to identify your socket.io clients.

# Install

```bash
npm install -s web-rockets-cookie
```

# Usage

```js
identifyByCookie(String cookieName, Boolean secureCookie, Function next);
```

## With SocketIO

```js
import SocketIO from 'socket.io';
import identifyByCookie from 'web-rockets-cookie';

const server = /* create a HTTP server */

const io = SocketIO.listen(server); /* create Web Sockets server */

io.use(identifyByCookie(
  cookieName, // the name of the cookie we want to get value from
  true, // if true, cookie is a secure cookie
  (cookie, socket, next) => { // the callback function
  // cookie is the cookie value of cookie name
  // socket is the current socket
  // next goes to next middleware
}));
```

## With Web-Rockets

```js
import WebRockets from 'web-rockets';
import identifyByCookie from 'web-rockets-cookie';

new WebRockets()
  .use(identifyByCookie(cookieName, true, (cookie, socket, next) => {}));
```
