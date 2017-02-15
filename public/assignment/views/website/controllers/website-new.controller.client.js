(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", websitenewcontroller);

    function websitenewcontroller($routeParams, $location, WebsiteService) {
        var app = this;
        var userID = $routeParams.uid;
        app.uid = userID;

        app.create = create;

        function create(newsite) {
            WebsiteService.createWebsite(userID, newsite);
            $location.url("/user/" + app.uid + "/website");
        }

        function init() {
            app.list = WebsiteService.findWebsitesByUser(userID);
        }
        init();
    }
})();