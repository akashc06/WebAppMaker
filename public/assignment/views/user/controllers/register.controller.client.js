(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", registerController);


    function registerController($location, UserService) {
        var app = this;
        app.clicked = create;

            function create(user) {
            var a = (new Date()).getTime();
            var newuser = {
                "_id": a,
                "username": user.username,
                "password": user.password,
                "firstName": user.firstName,
                "lastName": user.lastName
            };
            UserService.createUser(newuser);
            $location.url("/user/"+ newuser._id);
        }

    }
})();