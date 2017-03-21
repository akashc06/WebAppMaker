module.exports = function(app, model) {
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.post("/api/user", createUser);

    function createUser(req, res) {
        var newUser = req.body;
        model.userModel.createUser(newUser)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function findUser(req, res) {
        var username = req.query.username;
        var password = req.query.password;
        if(username && password) {
            findUserByCredentials(req, res);
        } else if(username) {
            findUserByUsername(req, res);
        }
    }


    function findUserById(req, res) {
        var userId = req.params.userId;
        model.userModel.findUserById(userId)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        model.userModel.findUserByUsername(username)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function findUserByCredentials(req, res){
        var username = req.query.username;
        var password = req.query.password;
        model.userModel.findUserByCreadentials(username, password)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function updateUser(req, res) {
        var userId = req.params.userId;
        var newUser = req.body;
        model.userModel.updateUser(userId, newUser)
            .then(function (user) {
                res.json(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function deleteUser(req, res) {
        var userId = req.params.userId;
        model.userModel.deleteUser(userId)
            .then(function (user) {
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }
};