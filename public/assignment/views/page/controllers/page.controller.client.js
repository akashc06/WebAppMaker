

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
        .controller("PageEditController", PageEditController)
        .controller("PageNewController", PageNewController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];


        function init() {
            PageService
                .findPageByWebsiteId(vm.wid)
                .success(function (pages) {
                    vm.pages = angular.copy(pages);
                })
        }
        init();

    }

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];
        vm.pageID = $routeParams['pid'];

        //Event Handlers
        vm.deletePage = deletePage;
        vm.update = update;

        function init() {
             PageService
                    .findPageById(vm.pageID)
                    .success(function (page) {
                        vm.page = page;
                    });
            PageService
                .findPageByWebsiteId(vm.wid)
                .success(function (pages) {
                    vm.pages = angular.copy(pages);
                })


        }
        init();

        function deletePage() {
            PageService
                .deletePage(vm.pageID)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                })
        }

        function update(newPage) {
            PageService
                .updatePage(vm.pageID, newPage)
                .success(function () {
                    $location.url("/user/" + vm.userID + "/website/" + vm.websiteID + "/page");
                })

        }

    }

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];

        //Event Handlers
        vm.create = create;


        function init() {
            PageService
                .findPageByWebsiteId(vm.wid)
                .success(function (pages) {
                    vm.pages = angular.copy(pages);
                })
        }
        init();

        function create(newPage) {
            PageService
                .createPage(vm.wid, newPage)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page");
                })

        }

    }

})();