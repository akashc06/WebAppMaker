
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];
        vm.pageID = $routeParams['pid'];
        vm.widgetID = $routeParams['wgid'];


        //Event Handler
        vm.update = update;
        vm.deleteWidget = deleteWidget;

        function init() {
            WidgetService
                .findWidgetById(vm.widgetID)
                .success(function (widget) {
                    vm.widget = widget;
                })
        }
        init();

        function update(widget) {
            WidgetService
                .updateWidget(vm.widgetID, widget)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pageID + "/widget");
                })
        }

        function deleteWidget() {
            WidgetService
                .deleteWidget(vm.widgetID)
                .success(function () {
                    $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pageID + "/widget");
                })
        }

    }

})();
