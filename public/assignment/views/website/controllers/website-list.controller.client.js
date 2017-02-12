(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", websitelistcontroller);

    function websitelistcontroller($routeParams, WebsiteService) {
        var app = this;
        var userID = $routeParams.uid;
        app.uid = userID;

        function init() {
            app.list = WebsiteService.findWebsitesByUser(userID);
        }
        init();
   }
})();