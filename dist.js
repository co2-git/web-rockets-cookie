'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function identifyByCookie(cookieName, secure, cb) {
  return function (socket, next) {
    try {
      var req = {
        "headers": {
          "cookie": socket.request.headers.cookie
        }
      };

      (0, _cookieParser2.default)()(req, null, function () {});

      var cookies = req[secure ? 'signedCookies' : 'cookies'];

      if (!(cookieName in cookies)) {
        return next();
      }

      cb(JSON.parse(cookies[cookieName]), socket, next);
    } catch (error) {
      next(error);
    }
  };
}

exports.default = identifyByCookie;
