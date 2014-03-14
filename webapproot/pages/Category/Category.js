Application.$controller("CategoryPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', 'Utils', '$location',
    function($rootScope, $scope, Widgets, Variables, Utils, $location) {
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
            $rootScope.navigateToCategory(category);
            filterVariable(category);
        }


        $scope.productListClick = function($event, $scope) {
            $rootScope.selectedItem = $scope.$parent.item;
            console.log("item", $rootScope.selectedItem);
            $location.path("Product");
        };

    }
]);