(function () {
    'use strict';

    angular.module('store')
        .directive('headerDirective', headerDirective);

    function headerDirective() {
        var directive = {
            restrict: 'E',
            replace: false,
            templateUrl: 'app/shared/directives/header/header.html'
        };

        return directive;
    }

})();