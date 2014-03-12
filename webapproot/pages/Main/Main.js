Application.$controller("MainPageController", ['$scope', 'Widgets', 'Variables', '$timeout',
    function($scope, Widgets, Variables, $timeout) {
        "use strict";

        var views = ['view1', 'view2', 'view3'],
            viewName,
            index;

        var toggleViews = function(index) {
            viewName = views[index];
            $('.wm-view').find('[name=' + viewName + ']').toggle();
            $timeout(function() {
                toggleViews(index + 1);
            });

        }

        var displayViews = function() {
            index = 0;
            $('.wm-view').find('[name=' + views[index] + ']').toggle();
            $timeout(function() {
                toggleViews(index + 1);
            });

        }
        $timeout(displayViews);
    }
]);