Application.$controller("ProductsPageController", ["$rootScope", "$scope", "Widgets", "Variables", "$location",
    function($rootScope, $scope, Widgets, Variables, $location) {
        "use strict";
        (function() {
            Variables.selectedItem.dataSet = $rootScope.selectedItem;
        })();

        $scope.addToCartClick = function($event, $scope) {
            WM.forEach(Variables.products.dataSet.data, function(product) {
                if ($rootScope.selectedItem.name === product.name) {
                    Variables.currentProduct.dataSet = product;
                }
            });
            $location.path("Cart");
        };

    }
]);