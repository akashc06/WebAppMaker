(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    
    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            "pages": pages,
            "findPageByWebsiteId": findPageByWebsiteId,
            "createPage": createPage,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        function deletePage(pageId) {
            for(p in pages){
                if(pages[p]._id == pageId){
                    pages.splice(p, 1);
                }
            }
        }

        function updatePage(pageId, page) {
            for (p in pages){
                if (pages[p]._id == pageId){
                    pages[p].name = page.name;
                    pages[p].description = page.description;
                return angular.copy(pages[p]);
                }

            }
            return null;
        }
        function findPageById(pageId) {
            for (p in pages){
                if (pages[p]._id == pageId){
                    return angular.copy(pages[p])
                }
            }
            return null;
        }

        function createPage(websiteId, page) {
            var a = (new Date()).getTime();
            var newpage = {
                "_id": a,
                "name": page.name,
                "websiteId": websiteId,
                "description": page.description
            };
            pages.push(newpage);
        }
        function findPageByWebsiteId(websiteId) {
            var lop = [];
            for (p in pages){
                if (pages[p].websiteId == websiteId){
                    lop.push(pages[p]);
                }
            }
            return angular.copy(lop);
        }



    }
})();