(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);

    function userService() {

        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
        ];

        var api = {
            "users": users,
            "findUserByCredentials" : findUserByCredentials,
            "findUserByUsername" : findUserByUsername,
            "findUserById" : findUserById,
            "updateUser": updateUser,
            "createUser": createUser,
            "deleteUser": deleteUser
        };
        return api;

        function deleteUser(userId) {
            for (u in users){
                if(users[u]._id == userId){
                    users.splice(u, 1);
                }
            }
        }

        function createUser(newuser) {
            users.push(newuser);
            return angular.copy(users);
        }
        
        function updateUser(userId, newuser) {
            for(u in users){
                if (users[u]._id == userId){
                    users[u].firstName = newuser.firstName;
                    users[u].lastName = newuser.lastName;
                    return angular.copy(users[u]);
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (u in users){
                if(users[u].username == username){
                    return angular.copy(users[u]);
                }
            }
            return null;
        }


        function findUserById(userID) {
            for (var u in users){
                if (users[u]._id == userID){
                    return angular.copy(users[u])
                }
            }
            return null;
        }


        function findUserByCredentials(username, password) {
            for (var u in users){
                if (username == users[u].username &&
                        password == users[u].password){
                    return angular.copy(users[u])
                }
            }
            return null;

        }
    }
})();