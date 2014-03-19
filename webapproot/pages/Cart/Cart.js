Application.$controller("CartPageController", ["$scope", "$rootScope", "Widgets", "Variables", "Utils",
    function($scope, $rootScope, Widgets, Variables, Utils) {
        "use strict";
        (function () {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
        })();
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);