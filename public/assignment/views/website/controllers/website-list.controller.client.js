
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.uid = $routeParams['uid'];

        function init(){
            WebsiteService
                .findWebsitesByUser(vm.uid)
                .success(function (response) {
                    vm.websites = response;
                    if(vm.websites.length == 0){
                        vm.error = "No websites created yet";
                    }
                });
        }
        init();

    }
})();