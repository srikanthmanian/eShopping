Application.$controller("MainPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', '$timeout', 'Utils', '$location',
    function($rootScope, $scope, Widgets, Variables, $timeout, Utils, $location) {
        "use strict";

        var views = ['promo-camera', 'promo-mobile', 'promo-peripheral'],
            viewName,
            index,
            bannerTimeout = 3000;

        var displayBannerImage = function(index) {
            for (var i = 0; i < views.length; i++) {
                var viewName = views[i];
                if (index == i) {
                    Widgets[viewName].show = true;
                } else {
                    Widgets[viewName].show = false;
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

    }
]);

Application.$controller("loginDialogController", ["$rootScope", "$scope", "Variables", "Widgets", "DialogService",

    function($rootScope, $scope, Variables, Widgets, DialogService) {
        "use strict";

        $scope.button3Click = function($event, $scope) {
            /** Check the live variable if the credentials are right*/
            WM.forEach(Variables.users.dataSet.data, function(userObj) {
                if (userObj.name === Widgets.username_val.datavalue && userObj.password === Widgets.password_val.datavalue) {
                    Variables.currentUser.dataSet = {};
                    Variables.currentUser.dataSet = userObj;
                    $rootScope.userLoggedin = true;
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