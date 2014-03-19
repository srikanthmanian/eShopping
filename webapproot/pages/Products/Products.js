Application.$controller("ProductsPageController", ["$rootScope", "$scope", "Widgets", "Variables", "$location",
    function($rootScope, $scope, Widgets, Variables, $location) {
        "use strict";
        (function() {
            Variables.selectedItem.dataSet = $rootScope.selectedItem;
            delete Variables.currentUser.dataSet.dataValue;
        })();

        $scope.addToCartClick = function($event, $scope) {
            WM.forEach(Variables.products.dataSet.data, function(product) {
                if ($rootScope.selectedItem.name === product.name) {
                    Variables.currentProduct.dataSet = product;
                }
            });

            console.log("currentUser", Variables.currentUser.dataSet);
            console.log("currentProduct", Variables.currentProduct.dataSet);

            var item = {
                "product": Variables.currentProduct.dataSet,
                "quantity": 1,
                "status": "In Cart",
                "user": Variables.currentUser.dataSet
            };
            Variables.call("insertRow", "ordersInsert", {
                "row": item
            }, function(response) {
                console.log("response", response);
            });

            $location.path("Cart");
        };

    }
]);