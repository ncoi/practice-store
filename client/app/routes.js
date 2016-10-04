(function () {
    'use strict';

    angular.module('store')
        .config(['$routeProvider', routes]);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/main/views/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            })
            .when('/shoes', {
                templateUrl: 'app/components/main/views/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            })
            .when('/shoes/add', {
                templateUrl: 'app/components/main/views/add_shoe.html',
                controller: 'mainController',
                controllerAs: 'main'
            });


    }

})();