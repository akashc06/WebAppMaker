(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService,$location) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];

        //Event Handler
        vm.update = update;
        vm.delete = deleteWeb;

        function init() {
            WebsiteService
                .findWebsiteById(vm.wid)
                .success(function (website) {
                    vm.website = website;
                });
            WebsiteService
                .findWebsitesByUser(vm.uid)
                .success(function (websites) {
                    vm.websites = angular.copy(websites);
                })
        }
        init();

        function update(newWebsite) {
            WebsiteService
                .updateWebsite(vm.wid, newWebsite)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/");
                })
        }

        function deleteWeb(){
            WebsiteService
                .deleteWebsite(vm.wid)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/");
                })

        }

    }
})();
