(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, PageService, $routeParams) {
        var app = this;
        app.wid = $routeParams.wid;
        app.uid = $routeParams.uid;
        app.pid = $routeParams.pid;
        app.update = update;
        app.delete = deletefunc;

        function deletefunc() {
            PageService.deletePage(app.pid);
            $location.url("/user/"+ app.uid + "/website/" + app.wid + "/page");
        }

        function update(newpage) {
            var page = PageService.updatePage(app.pid, newpage);
            if (page == null){
                app.error = "Cannot update page"
            }else {
                app.message = "Page Updated";
            }
        }

        function init() {
            var pages = [];
            app.pages = PageService.findPageByWebsiteId(app.wid);
            app.thispage = PageService.findPageById(app.pid);
        }
        init();
    }
})();