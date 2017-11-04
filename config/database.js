const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://ganesh:ganesh@ds119302.mlab.com:19302/angular2app', 
  secret: crypto, // Cryto-created secret
  db: 'angular2app' // Database name
}
