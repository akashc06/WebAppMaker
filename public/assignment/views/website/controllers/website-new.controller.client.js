(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        
        //event handler
        vm.create = create;


        function init(){
            WebsiteService
                .findWebsitesByUser(vm.uid)
                .success(function (websites) {
                    vm.websites = websites;
                });
        }
        init();
        
        function create(website) {
            WebsiteService
                .createWebsite(vm.uid, website)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website");
                })
            
        }

    }
})();
