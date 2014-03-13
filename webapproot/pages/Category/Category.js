Application.$controller("CategoryPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', 'Utils',
    function($rootScope, $scope, Widgets, Variables, Utils) {
        "use strict";
        var category;
        (function getActiveCategory() {
            category = Utils.browserStorage.getItem('wm.activeCategory');
            console.log("category", category);
        })();

        function navigateToCategory(category) {
            debugger;
            Utils.browserStorage.storeItem("wm.activeCategory", category);
        }


    }
]);