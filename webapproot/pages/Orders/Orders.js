Application.$controller("OrdersPageController", ["$scope", "$rootScope", "Widgets", "Utils", "Variables",
    function($scope, $rootScope, Widgets, Utils, Variables) {
        "use strict";
        (function() {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
        })();
        $scope.onPageReady = function() {
            $rootScope.pageLoading = false;
        }
        $scope.onPageVariablesReady = function() {
            Variables.currentUser.dataSet = JSON.parse(Utils.browserStorage.getItem('wm.currentUserObj'));
        }
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);