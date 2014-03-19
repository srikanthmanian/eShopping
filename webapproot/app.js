Application.run(function ($rootScope) {
    "use strict";
	$rootScope.navigateToCategory = function (category) {
        localStorage.setItem("wm.activeCategory", category);
    }

    $rootScope.selectedItem = {};

    $rootScope.logout = function () {
        debugger;
        localStorage.setItem("wm.isUserLoggedIn", "");
    };
});