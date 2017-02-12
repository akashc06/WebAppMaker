(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", profileController);
    
    function profileController($routeParams, UserService) {
        var app = this;
        var userID = $routeParams.uid;
        app.uid = userID;
        app.update = update;

            function update (newuser) {
            var user = UserService.updateUser(userID, newuser);
            if (user == null){
                app.error = "User not found";
            }
            else {
                app.message = "Successfully updated";
            }
        }

        function init() {

            app.user = UserService.findUserById(userID);

        }
        init();
        
    }
})();