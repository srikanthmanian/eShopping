Application.$controller("CategoryPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', 'Utils',
    function($rootScope, $scope, Widgets, Variables, Utils) {
        "use strict";

        var category;

        function filterVariable(category) {
            Variables.selectedCategory.dataSet.dataValue = category;
        }

        (function() {
            category = Utils.browserStorage.getItem('wm.activeCategory');
            filterVariable(category);
            $scope.productsList = Variables.productCategories.dataSet;
        })();

        $scope.navigateCallback = function(category) {
            debugger;
            $rootScope.navigateToCategory(category);
            filterVariable(category);
        }

    }
]);