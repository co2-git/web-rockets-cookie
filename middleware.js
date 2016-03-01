'use strict';

import cookieParser from 'cookie-parser';

function identifyByCookie(cookieName, secure, cb) {
  return (socket, next) => {
    try {
      const req = {
        "headers"     :   {
          "cookie"    :   socket.request.headers.cookie
        }
      };

      cookieParser()(req, null, () => {});

      const cookies = req[secure ? 'signedCookies' : 'cookies'];

      if ( ! ( cookieName in cookies ) ) {
        return next()
      }

      cb(cookies[cookieName], socket, next);
    }
    catch ( error ) {
      next(error);
    }
  };
}

export default identifyByCookie;
