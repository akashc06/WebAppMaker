module.exports = function () {

    var mongoose = require("mongoose");
    var WebsiteSchema = require('./website.schema.server')();
    var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
    //var UserModel = require("../user/user.model.server")();

    var api = {
        "createWebsiteForUser": createWebsiteForUser,
        "findAllWebsitesForUser": findAllWebsitesForUser,
        "findWebsiteById": findWebsiteById,
        //"updateWebsite": updateWebsite,
        //"deleteWebsite": deleteWebsite,
        //"deleteWebsiteAndChildren": deleteWebsiteAndChildren,

    };

    return api;

    function createWebsiteForUser(userId, newSite) {
        return WebsiteModel
            .create(newSite)
            .then(
                function (website) {
                    return userModel
                        .findUserById(userId)
                        .then(function (user) {
                            website._user = user._id;
                            user.websites.push(website._id);
                            website.save();
                            user.save();
                            return website;
                        }, function (err) {
                            return err;
                        })
                },
                function (err) {
                    return err;
                });
    }

    function findWebsiteById(websiteId) {
        return WebsiteModel.findOne({_id: websiteId});
    }

    function findAllWebsitesForUser(userId) {
        return WebsiteModel.find({"_user": userId});

    }
};