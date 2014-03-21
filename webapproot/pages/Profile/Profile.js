Application.$controller("ProfilePageController", ["$scope", "$rootScope", "Widgets", "Utils", "Variables",
    function($scope, $rootScope, Widgets, Utils, Variables) {
        "use strict";
        (function() {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
        })();

        $scope.onPageReady = function() {
            $rootScope.pageLoading = false;
            Variables.currentUser.dataSet = JSON.parse(Utils.browserStorage.getItem('wm.currentUserObj'));
        }
    }
]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);