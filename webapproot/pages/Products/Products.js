Application.$controller("ProductsPageController", ["$rootScope", "$scope", "Widgets", "Variables", "$location", "Utils",
    function($rootScope, $scope, Widgets, Variables, $location, Utils) {
        "use strict";
        (function() {
            debugger;
            $rootScope.pageLoading = false;
            $rootScope.userLoggedin = Utils.browserStorage.getItem('wm.isUserLoggedIn');
            Variables.selectedItem.dataSet = $rootScope.selectedItem = JSON.parse(Utils.browserStorage.getItem('wm.activeProduct'));
            delete Variables.currentUser.dataSet.dataValue;
        })();

        $scope.addToCartClick = function($event, $scope) {
            WM.forEach(Variables.products.dataSet.data, function(product) {
                if ($rootScope.selectedItem.name === product.name) {
                    Variables.currentProduct.dataSet = product;
                }
            });

            var item = {
                "product": Variables.currentProduct.dataSet,
                "quantity": 1,
                "status": "In Cart",
                "user": Variables.currentUser.dataSet
            };
            Variables.call("insertRow", "ordersInsert", {
                "row": item
            }, function(response) {
            });

            $location.path("Cart");
        };
    }
]);