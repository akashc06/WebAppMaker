(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", registerController);


    function registerController($location, UserService) {
        var app = this;
        app.clicked = create;

            function create(user) {
            var a = (Math.floor(100 + Math.random() * 900)).toString();
            var newuser = {
                "_id": a,
                "username": user.username,
                "password": user.password,
                "firstName": user.firstName,
                "lastName": user.lastName
            };
            UserService.createUser(newuser);
            $location.url("/login");
        }

    }
})();