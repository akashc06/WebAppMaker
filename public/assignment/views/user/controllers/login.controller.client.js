(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", loginController);

    function loginController(UserService, $location) {
        var vm = this;

        //event handlers
        vm.login = login;

        function init() {
        }
        init();

        function login(user) {
                UserService
                    .findUserByCredentials(user.username, user.password)
                    .success(function (user) {
                if (user) {
                    $location.url("/user/" + user._id);
                }
            })
                .error(function (error) {
                    vm.error = "User not found";
                    return null;
                });

        }
    }

})();
