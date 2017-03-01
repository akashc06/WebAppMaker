
module.exports = function (app) {
    app.get("/api/user", findUser);
    app.get("/api/user/:uid", findUserByID);
    app.put("/api/user/:uid", updateUser);
    app.post("/api/user", createUser);
    app.delete("/api/user/:uid", deleteUser);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: "alice@gmail.com" },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob.marley@gmail.com"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: "charly123@gmail.com"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "jose2323@gmail.com" }
    ];

    function createUser(req, res) {
        var newUser = req.body;
        newUser._id = (new Date()).getTime() + "";
        users.push(newUser);
        res.json(newUser);
    }

    function findUser(req,res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username && password){
            findUserByCredentials(req, res);
        }
        else if(username){
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        var user = users.find(function (u) {
            return u.username == username;
        });
        if(user){
            res.json(user);
        }
        else
        {
            res.sendStatus(404).send({message: 'User Not Found'});
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        var user = users.find(function (user) {
            return user.username == username && user.password == password;
        })

        res.json(user);
    }

    function findUserByID(req, res) {
        var userID = req.params.uid;
        var user = users.find(function (u) {
            return u._id == userID;
        });
        res.send(user);
    }

    function updateUser(req, res) {
        var userId = req.params.uid;
        var newUser = req.body;
        for(var u in users){
            var user = users[u];
            if(user._id == userId){
                users[u].firstName = newUser.firstName;
                users[u].lastName = newUser.lastName;
                users[u].username = newUser.username;
                users[u].email = newUser.email;
                res.json(user);
                return;
            }
        }
    }

    function deleteUser(req, res) {
        var userId = req.params.uid;
        for(var u in users){
            if(users[u]._id == userId){
                users.splice(u, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }
}

