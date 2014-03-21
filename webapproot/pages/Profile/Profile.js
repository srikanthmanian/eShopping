Application.$controller("ProfilePageController", ["$scope", "$rootScope", "Widgets", "Utils", "Variables",
    function($scope, $rootScope, Widgets, Utils, Variables) {
        "use strict";
        (function() {
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
        })();
        $scope.onPageReady = function() {
            $rootScope.pageLoading = false;
        }
        $scope.onPageVariablesReady = function() {
            Variables.currentUser.dataSet = JSON.parse(Utils.browserStorage.getItem('wm.currentUserObj'));
        }

        $scope.saveClick = function($event, $scope) {
            var data = Variables.currentUser.dataSet;
            data.name =  Widgets.NameVal.datavalue;
            data.landmark =  Widgets.LandmarkVal.datavalue;
            data.country = Widgets.CountryVal.datavalue;
            data.street = Widgets.StreetVal.datavalue;
            data.phone = Widgets.PhoneVal.datavalue;
            data.pin = Widgets.PinVal.datavalue;
            data.city = Widgets.CityVal.datavalue;
            Variables.currentUser.dataSet = data;
            Utils.browserStorage.storeItem('wm.currentUserObj', JSON.stringify(data));

            Variables.call("updateRow", "users", {
                "row": data
            }, function(response) {});

        };
    }
]);
