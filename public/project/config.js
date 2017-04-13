(function () {
    angular
        .module("Project")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/home/:uid",{
                templateUrl: "views/home/result.view.client.html",
                controller: "ResultController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/home/:uid/:word",{
                templateUrl: "views/home/result.view.client.html",
                controller: "ResultController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/home/guest/search/res",{
                templateUrl: "views/home/result.view.client.html",
                controller: "ResultController",
                controllerAs: "model"
            })
            .when("/home/guest/:key/search",{
                templateUrl: "views/guest/guestpage.view.client.html",
                controller: "GuestController",
                controllerAs: "model"
            })
            .when("/home/guest/:key/search",{
                templateUrl: "views/guest/guestpage.view.client.html",
                controller: "GuestController",
                controllerAs: "model"
            })
            .when("/home/guest//search",{
                templateUrl: "views/guest/guestpage.view.client.html",
                controller: "GuestController",
                controllerAs: "model"
            })
            .when("/user/:uid/administration",{
                templateUrl: "views/user/manage-users.client.view.html",
                controller: "AdminController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/home/guest/search/:rid",{
                templateUrl: "views/restaurant/rest.client.view.html",
                controller: "RestController",
                controllerAs: "model"
            })
            .when("/home/:uid/profile/:pid",{
                templateUrl: "views/user/profile-page.client.view.html",
                controller: "ProfileProfileController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/home/:uid/res/:rid",{
                templateUrl: "views/restaurant/rest.client.view.html",
                controller: "RestController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            /*.when("/",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })*/
            .when("/user/:uid", {
                templateUrl: "views/user/profile.client.view.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/user/:uid/reviews", {
                templateUrl: "views/user/review.client.view.html",
                controller: "ReviewController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/user/:uid/reviews/:rid", {
                templateUrl: "views/user/review-edit.client.view.html",
                controller: "ReviewEditController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/users", {
                templateUrl: "views/home/user_home.client.view.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/user/:uid/edit", {
                templateUrl: "views/user/profile-edit.client.view.html",
                controller: "ProfileEditController",
                controllerAs: "model"
            })
            .when("/user/:uid/messages", {
                templateUrl: "views/user/followers.client.view.html",
                controller: "FollowersController",
                controllerAs: "model",
                resolve: { loggedin: checkLoggedin }
            })
            .when("/user/:uid/following", {
                templateUrl: "views/user/following.client.view.html"
                /*controller: "ProfileEditController",
                 controllerAs: "model"*/
            })
            .otherwise({
                redirectTo: "/home"
            });
    }

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();

        $http.get('/api/loggedin')
            .then(function(user) {
                user = user.data;
                $rootScope.errorMessage = null;
                if (user !== '0') {
                    //currentUser = user;
                    deferred.resolve();
                } else {
                    deferred.reject();
                    $location.url('/home');
                }
            });
        return deferred.promise;
    };

})();