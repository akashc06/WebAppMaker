(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, PageService, $routeParams) {
        var app = this;
        app.wid = $routeParams.wid;
        app.uid = $routeParams.uid;
        app.create = create;

        function create(page) {
            PageService.createPage(app.wid, page);
            $location.url("/user/" + app.uid + "/website/" + app.wid + "/page");
        }

        function init() {
            var pages = [];
            app.pages = PageService.findPageByWebsiteId(app.wid);
        }
        init();
    }
})();