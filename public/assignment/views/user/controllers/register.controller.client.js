
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        //Event Handlers
        vm.register = register;


        function init() {
        }
        init();

        function register(user) {
            UserService
                .createUser(user)
                .success(function (newUser) {
                    $location.url("/user/" + newUser._id);
                })
                .error(function () {
                    vm.error = "User Registration Failed";
                })

        }


    }
})();
