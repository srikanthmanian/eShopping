Application.$controller("CartPageController", ["$scope", "Widgets", "Variables", "Utils",
    function($scope, Widgets, Variables, Utils) {
        "use strict";

        (function() {
            console.log("currentUser", Variables.currentUser.dataSet);
            console.log("currentProduct", Variables.currentProduct.dataSet);



            Variables.cartItems.call("insertRow")

        })();
    }
]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
    }
]);