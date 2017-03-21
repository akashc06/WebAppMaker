module.exports = function (mongoose, q) {

    //var mongoose = require("mongoose");
    var WebsiteSchema = require('./website.schema.server')();
    var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
   // var userModel = require("../user/user.model.server")();


    var api = {
        "createWebsiteForUser": createWebsiteForUser,
        "findAllWebsitesForUser": findAllWebsitesForUser,
        "findWebsiteById": findWebsiteById,
        "updateWebsite": updateWebsite,
        "deleteWebsite": deleteWebsite,
        //"deleteWebsiteAndChildren": deleteWebsiteAndChildren,

    };

    return api;

    function updateWebsite(websiteId, website) {
        var deferred = q.defer();

        WebsiteModel.update({_id:websiteId},
            {$set:website}
            , function (err, website) {
                if(err){
                    deferred.reject(err);
                }
                else {
                    userModel
                        .findUserById(website._user, function (err, user) {
                            if(err){
                                deferred.reject(err)
                            }else {
                                user.websites.push(website._id)
                            }
                        });
                    deferred.resolve(website);
                }
            });
        return deferred.promise;

    }

    function createWebsiteForUser(userId, website) {
        var deferred = q.defer();
        website._user = userId;
        WebsiteModel.create(website, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);

            }
        });
        return deferred.promise;
    }


    function findWebsiteById(websiteId) {
        var deffered = q.defer();
        WebsiteModel
            .findOne({_id: websiteId}, function (err, data) {
                if (err){
                    deferred.reject(err);
                }else {
                    deffered.resolve(data)
                }
            });
        return deffered.promise;
    }

    function findAllWebsitesForUser(userId) {
        var deffered = q.defer();
        WebsiteModel
            .find({_user: userId}, function (err, data) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deffered.resolve(data)
                }
            });
        return deffered.promise;
    }

    function deleteWebsite(webId) {
        var deferred = q.defer();
        WebsiteModel.remove({_id: webId}, function (err, status) {
            if(err){
                deferred.reject(err);
            }
            else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }

};