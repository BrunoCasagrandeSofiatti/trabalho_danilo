var admin = require('firebase-admin');

var serviceAccount = require('./schedule-tyesko.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://schedule-tyesko.firebaseio.com'
});
module.exports = admin;