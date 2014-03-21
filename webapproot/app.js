Application.run(function ($rootScope, Widgets, Variables, $location, $route) {
    "use strict";
	$rootScope.navigateToCategory = function (category) {
        localStorage.setItem("wm.activeCategory", category);
    }

    $rootScope.selectedItem = {};

    $rootScope.logout = function () {
        localStorage.setItem("wm.isUserLoggedIn", "");
        localStorage.setItem("wm.currentUserObj", "");
    };

    $rootScope.pageLoading = false;

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