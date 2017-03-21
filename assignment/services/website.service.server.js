module.exports = function (app, model) {

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findWebsitesByUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res) {
        var userId = req.params.userId;
        var newwebsite = req.body;
        model.websiteModel
            .createWebsiteForUser(userId, newwebsite)
            .then(function (website) {
                res.json(website);
            }, function (err) {
                res.sendStatus(404);
            });
    }

    function findWebsitesByUser(req, res) {
        var userId = req.params.userId;
        //console.log(userId);
        model.websiteModel
            .findAllWebsitesForUser(userId)
            .then(function (response) {
                res.json(response);
            }, function (err) {
                res.sendStatus(404);
            });
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        model.websiteModel
            .findWebsiteById(websiteId)
            .then(function (website) {
                res.json(website);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        model.websiteModel
            .updateWebsite(websiteId, website)
            .then(function (website) {
                res.json(website);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        model.websiteModel
            .deleteWebsite(websiteId)
            .then(function (status) {
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }
};