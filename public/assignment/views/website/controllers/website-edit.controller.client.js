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
        app.delete = deletefun;
        app.update = updatefunc;

        function deletefun(){
            WebsiteService.deleteWebsite(app.wid);
            console.log();
            $location.url("/user/"+ app.uid + "/website");
        }

         function updatefunc (newsite) {
            var site = WebsiteService.updateWebsite(webID, newsite);
            if(site == null){
                app.error = "Invalid Website ID";

            }else {
                app.message = "Website successfully updated.";
            }
        }

        function init() {
            app.website = WebsiteService.findWebsiteById(webID);
            app.list = WebsiteService.findWebsitesByUser(userID);
        }
        init();

    }
})();