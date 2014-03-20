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
            category = Utils.browserStorage.getItem('wm.activeCategory');
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
            filterVariable(category);
            $scope.productsList = Variables.productCategories.dataSet;
        })();

        $scope.navigateCallback = function(category) {
            $rootScope.navigateToCategory(category);
            filterVariable(category);
        }

        $scope.productListClick = function($event, $scope) {
            $rootScope.selectedItem = $scope.$parent.item;
            $location.path("Products");
            $rootScope.pageLoading = true;
        };

        /* perform any action with the variables inside this block(on-page-load) */
        $scope.$root.$on('on-variables-ready', function() {

        });

    }
]);

Application.$controller("loginDialogController", ["$scope",
    function($scope) {
        "use strict";
    }
]);