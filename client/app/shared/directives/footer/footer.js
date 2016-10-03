(function () {
    'use strict';

    angular.module('store')
        .directive('footerDirective', footerDirective);

    function footerDirective() {
        var directive = {
            restrict: 'E',
            replace: false,
            templateUrl: 'app/shared/directives/footer/footer.html'
        };

        return directive;
    }

})();