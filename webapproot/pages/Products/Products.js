Application.$controller("ProductsPageController", ["$rootScope", "$scope", "Widgets", "Variables",

    function($rootScope, $scope, Widgets, Variables) {
        "use strict";
        (function() {
            Variables.selectedItem.dataSet = $rootScope.selectedItem;
        })();
    }
]);