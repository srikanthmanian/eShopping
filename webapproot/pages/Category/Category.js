Application.$controller("CategoryPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', 'Utils', '$location',
    function($rootScope, $scope, Widgets, Variables, Utils, $location) {
        "use strict";

        var category;

        function filterVariable(category) {
            Variables.selectedCategory.dataSet.dataValue = category;
            Utils.browserStorage.storeItem("wm.selectedCategory", JSON.stringify(Variables.selectedCategory.dataSet.dataValue));
        }

        (function() {
            $rootScope.pageLoading = false;
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
            $rootScope.selectedItem = JSON.parse(Utils.browserStorage.getItem('wm.activeProduct'));

            category = Utils.browserStorage.getItem('wm.activeCategory');
            filterVariable(category);
            $scope.productsList = Variables.productCategories.dataSet;
        })();

        $scope.navigateCallback = function(category) {
            $rootScope.navigateToCategory(category);
            filterVariable(category);
        }

        $scope.productListClick = function($event, $scope) {
            $rootScope.selectedItem = $scope.item;
            Utils.browserStorage.storeItem('wm.activeProduct', JSON.stringify($scope.item));
            $location.path("Products");
            $rootScope.pageLoading = true;
        };
    }
]);

Application.$controller("loginDialogController", ["$scope",
    function($scope) {
        "use strict";
    }
]);