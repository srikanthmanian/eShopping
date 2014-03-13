Application.$controller("ProductPageController", ["$scope", "Widgets", "Variables", "Utils",
    function($scope, Widgets, Variables, Utils) {
        "use strict";

        function navigateToCategory(category) {
            Utils.browserStorage.storeItem("wm.activeCategory", category);
        }

    }
]);