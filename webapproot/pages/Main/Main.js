Application.$controller("MainPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', '$timeout', 'Utils', '$location', 'ViewService',
    function($rootScope, $scope, Widgets, Variables, $timeout, Utils, $location, ViewService) {
        "use strict";

        var views = ['promo-camera', 'promo-mobile', 'promo-peripheral'],
            viewName,
            index,
            bannerTimeout = 3000;

        /* perform any action with the variables inside this block(on-page-load) */
        $scope.$root.$on('on-variables-ready', function() {
            /*
             * variables can be accessed through 'Variables' service here
             * e.g. Variables.staticVariable1.getData()
             */
        });

        var displayBannerImage = function(index) {
            for (var i = 0; i < views.length; i++) {
                var viewName = views[i];
                if (index == i) {
                    ViewService.showView(viewName);
                }
            }

            $timeout(function() {
                var n = index + 1;
                if (n == views.length) {
                    n = 0;
                }
                displayBannerImage(n);
            }, bannerTimeout);

        };

        $scope.onPageReady = function() {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn') + "";
            displayBannerImage(0);
        }

        $scope.onCategoryClick = function(category) {
            Utils.browserStorage.storeItem('wm.activeCategory', category);
            $location.path('Category');
        }

        $scope.categorylistClick = function($event, $scope) {
            $rootScope.selectedItem = $scope.$parent.item;
            $location.path("Products");
        };

        $scope.$root.$on("on-variables-ready", function() {

        });

    }
]);

Application.$controller("loginDialogController", ["$rootScope", "$scope", "Variables", "Widgets", "DialogService", "Utils",

    function($rootScope, $scope, Variables, Widgets, DialogService, Utils) {
        "use strict";

        $scope.loginButtonClick = function($event, $scope) {
            /** Check the live variable if the credentials are right*/
            WM.forEach(Variables.users.dataSet.data, function(userObj) {
                if (userObj.email === Widgets.email_val.datavalue && userObj.password === Widgets.password_val.datavalue) {
                    Variables.currentUser.dataSet = {};
                    Variables.currentUser.dataSet = userObj;
                    $rootScope.userLoggedin = true;
                    Utils.browserStorage.storeItem('wm.isUserLoggedIn', $rootScope.userLoggedin);
                    Utils.browserStorage.storeItem('wm.currentUserObj', JSON.stringify(userObj));
                } else {

                }
            });
            if ($rootScope.userLoggedin) {
                /** Close  the  dialog */
                DialogService.hideDialog('loginDialog');
            }
        };
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);