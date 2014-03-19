Application.$controller("DashboardPageController", ["$scope", "$rootScope", "Widgets", "Utils",
    function($scope, $rootScope, Widgets, Utils) {
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

Application.$controller("loginDialogController", ["$scope",
    function($scope) {
        "use strict";
    }
]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);