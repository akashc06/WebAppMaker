
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams['uid'];


        function init() {
            WebsiteService
                .findWebsitesByUser(vm.uid)
                .success(function (websites) {
                    vm.websites = websites;
                })
        }
        init();

    }
})();