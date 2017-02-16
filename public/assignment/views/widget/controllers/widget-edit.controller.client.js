(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, WidgetService, $location) {
        var app = this;
        app.uid = $routeParams.uid;
        app.wid = $routeParams.wid;
        app.pid = $routeParams.pid;
        app.wdid = $routeParams.wgid;

        // Event Handlers
        app.delete = deletefunc;
        app.update = update;


        function init() {
            app.widget = WidgetService.findWidgetById(app.wdid);
        }
        init();

        function deletefunc() {
            WidgetService.deleteWidget(app.wdid);
            $location.url("/user/" + app.uid + "/website/" + app.wid + "/page/" + app.pid + "/widget");
        }

        function update(widget) {
            WidgetService.updateWidget(app.wdid, widget);
            $location.url("/user/" + app.uid + "/website/" + app.wid + "/page/" + app.pid + "/widget");
        }

    }
})();