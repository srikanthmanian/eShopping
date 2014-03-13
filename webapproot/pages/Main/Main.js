Application.$controller("MainPageController", ['$rootScope', '$scope', 'Widgets', 'Variables', '$timeout', 'Utils', '$location',
    function($rootScope, $scope, Widgets, Variables, $timeout, Utils, $location) {
        "use strict";

        var views = ['view1', 'view2', 'view3'],
            viewName,
            index,
            bannerTimeout = 3000;

        var toggleViews = function(index) {
            if (index > views.length - 1) {
                index = 0;
            }
            viewName = views[index];
            $('.dealsBanner .app-view').hide();
            $('#' + viewName).show();
            $timeout(function() {
                toggleViews(index + 1);
            }, bannerTimeout);

        }

        var displayViews = function() {
            index = 0;
            $('.dealsBanner .app-view').hide();
            $("#" + views[index]).show();
            $timeout(function() {
                toggleViews(index + 1);
            });

        }();
    }
]);