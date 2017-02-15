(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    
    function PageListController(PageService, $routeParams) {
        var app = this;
        app.wid = $routeParams.wid;
        app.uid = $routeParams.uid;

        function init() {
            app.pages = PageService.findPageByWebsiteId(app.wid);
        }
        init();
    }
})();