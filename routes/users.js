var GenericRouter = require('./generic');
var Service = require('../services/user-service');

module.exports = GenericRouter(Service);