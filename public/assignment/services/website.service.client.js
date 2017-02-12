(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", websiteService);
    
    function websiteService() {

        var websites = [
            { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "createWebsite": createWebsite,
            "deleteWebsite": deleteWebsite
        };
        return api;

        function deleteWebsite(websiteId) {
            for(w in websites){
                if(websites[w]._id == websiteId){
                    websites.splice(w, 1);
                }
            }
        }
        function createWebsite(userId, website) {
            var a = (Math.floor(100 + Math.random() * 900)).toString();
            var newwebsite = {
                "_id": a,
                "name": website.name,
                "developerId": userId,
                "description": website.description
            };
            websites.push(newwebsite);
            return websites;
        }
        function updateWebsite(websiteId, website) {
            for(w in websites){
                if (websites[w]._id == websiteId){
                    websites[w].name = website.name;
                    websites[w].description = website.description;
                    return websites[w];
                }

                }
            return null;
            }


        function findWebsiteById(websiteId) {
            for(w in websites){
                if (websites[w]._id == websiteId){
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }

        function findWebsitesByUser(userID) {
            var listOfSites = [];
            for(w in websites){
                if(websites[w].developerId == userID){
                    listOfSites.push(websites[w]);
                }
            }
            return listOfSites;
        }
    }
})();