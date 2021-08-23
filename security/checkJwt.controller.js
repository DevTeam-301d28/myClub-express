'use strict';
const JsonWebToken = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

function jwtVerify(token, callback) {
  JsonWebToken.verify(token, getKey, {}, (err, user) => {
    if (err) return callback(err);
    callback(user);
  });
}
function getKey(headers, callback) {
  const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  });

  client.getSigningKey(headers.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

module.exports = jwtVerify;
