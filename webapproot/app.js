Application.run(function ($rootScope, Widgets, Variables, $location, $route) {
    "use strict";
	$rootScope.navigateToCategory = function (category) {
        localStorage.setItem("wm.activeCategory", category);
    }

    $rootScope.selectedItem = {};

    $rootScope.logout = function () {
        localStorage.setItem("wm.isUserLoggedIn", "");
    };

    $rootScope.pageLoading = false;

    /* perform any action with the variables inside this block(on-page-load) */
    $rootScope.onAppVariablesReady = function() {
        /*
         * variables can be accessed through 'Variables' service here
         * e.g. Variables.staticVariable1.getData()
         */
    };

    $rootScope.navigateToPage = function ($event, $scope) {
        $rootScope.pageLoading = true;
    }

    $rootScope.activateProductSearch = function ($event) {
        WM.element($event.currentTarget).css("width", "60%");
    }

    $rootScope.search1Submit = function($event, $scope) {
        $rootScope.selectedItem = $event.data.item;
        if($location.$$path === "/Products") {
            $route.reload();
        } else {
            $location.path("Products");
        }
        $rootScope.pageLoading = true;
    };

});