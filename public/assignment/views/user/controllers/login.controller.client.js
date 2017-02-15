(function () {
        angular
            .module("WebAppMaker")
            .controller("LoginController", loginController);

        function loginController($location, UserService) {
            var app = this;

            app.login = login;

            function login(user) {
                var user = UserService.findUserByCredentials(user.username, user.password);
                if (user){
                    $location.url("/user/" + user._id);
                }
                else {
                    app.error = "User not found";
                }
            }
        }
})();