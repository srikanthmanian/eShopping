Application.$controller("CartPageController", ["$scope", "$rootScope", "Widgets", "Variables", "Utils",
    function($scope, $rootScope, Widgets, Variables, Utils) {
        "use strict";
        (function() {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
        })();

        $scope.onPageReady = function() {
            Variables.currentUser.dataSet = JSON.parse(Utils.browserStorage.getItem('wm.currentUserObj'));
        }
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);