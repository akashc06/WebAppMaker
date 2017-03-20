
module.exports = function (app) {

    var userModel = require("./model/user/user.model.server")();
    require("./services/user.service.server.js")(app, userModel);

    var WebsiteModel = require("./model/website/website.model.server")();
    require("./services/website.service.server.js")(app, WebsiteModel);

};