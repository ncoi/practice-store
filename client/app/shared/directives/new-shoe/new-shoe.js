(function () {
    'use strict';

    angular.module('store')
        .directive('newshoeDirective', newshoeDirective);

    function newshoeDirective() {
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {
                shoe: '='
            },
            templateUrl: 'app/shared/directives/new-shoe/new-shoe.html'
        };

        return directive;
    }

})();