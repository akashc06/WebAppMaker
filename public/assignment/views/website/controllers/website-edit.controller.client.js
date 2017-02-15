(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", websiteeditController);

    function websiteeditController($routeParams, $location, WebsiteService) {
        var app = this;
        var userID = $routeParams.uid;
        var webID = $routeParams.wid;
        app.wid = webID;
        app.uid = userID;

        // Event Handlers
        app.delete = deletefun;
        app.update = updatefunc;

        function deletefun(){
            WebsiteService.deleteWebsite(app.wid);
            console.log();
            $location.url("/user/"+ app.uid + "/website");
        }

         function updatefunc (newsite) {
            var site = WebsiteService.updateWebsite(webID, newsite);
             $location.url("/user/" + userID + "/website/");
        }

        function init() {
            app.website = WebsiteService.findWebsiteById(webID);
            app.list = WebsiteService.findWebsitesByUser(userID);
        }
        init();

    }
})();