Application.run(function ($rootScope, Widgets, Variables) {
    "use strict";
	$rootScope.navigateToCategory = function (category) {
        localStorage.setItem("wm.activeCategory", category);
    }

    $rootScope.selectedItem = {};

    $rootScope.logout = function () {
        localStorage.setItem("wm.isUserLoggedIn", "");
    };

});