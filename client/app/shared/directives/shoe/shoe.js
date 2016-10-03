(function () {
    'use strict';

    angular.module('store')
        .directive('shoeDirective', shoeDirective);

    function shoeDirective() {
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {
                shoe: '='
            },
            templateUrl: 'app/shared/directives/shoe/shoe.html'
        };

        return directive;
    }

})();