Application.run(function ($rootScope, Widgets, Variables) {
    "use strict";
	$rootScope.navigateToCategory = function (category) {
        localStorage.setItem("wm.activeCategory", category);
    }

    $rootScope.selectedItem = {};

    $rootScope.logout = function () {
        localStorage.setItem("wm.isUserLoggedIn", "");
    };

    /* perform any action with the variables inside this block(on-page-load) */
    $rootScope.$on('on-variables-ready', function() {
        /*
         * variables can be accessed through 'Variables' service here
         * e.g. Variables.staticVariable1.getData()
         */
    });


});