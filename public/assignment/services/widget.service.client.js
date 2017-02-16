(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    
    function WidgetService() {

        var widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            "widgets": widgets,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "deleteWidget": deleteWidget,
            "updateWidget": updateWidget,
            "createWidget": createWidget
        };
        return api;

        function deleteWidget(widgetId) {
            for(var w in widgets){
                if(widgets[w]._id == widgetId){
                    widgets.splice(w, 1);
                }
            }
        }

        function createWidget(pageId, widget) {
            widget._id = (new Date()).getTime();
            widget.pageId = pageId;
            widgets.push(widget);
            return angular.copy(widget);
        }

        function updateWidget(widgetId, widget) {
            for(var w in widgets){
                if(widgets[w]._id == widgetId){
                    switch (widget.widgetType){
                        case "HEADER":
                            widgets[w].size = widget.size;
                            widgets[w].text = widget.text;
                            return widget[w];

                        case "YOUTUBE":
                            widgets[w].url = widget.url;
                            widgets[w].width = widget.width;
                            return widget[w];

                        case "IMAGE":
                            widgets[w].url = widget.url;
                            widgets[w].width = widget.width;
                            return widget[w];
                        default:
                            return null;
                    }
                }
            }
            return null;
        }

        function findWidgetById(widgetId) {
            for (w in widgets) {
                if (widgets[w]._id == widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        function findWidgetsByPageId(pageId) {
            var wids = [];
            for (w in widgets){
                if(widgets[w].pageId == pageId){
                    wids.push(widgets[w]);
                }
            }
            return angular.copy(wids);
        }
    }
})();