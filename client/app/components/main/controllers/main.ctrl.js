(function () {
    'use strict';

    angular.module('store')
        .controller('mainController', mainController);

    function mainController(storeData) {
        var vm = this;

        vm.shoeList = [];

        vm.getShoes = function () {
            storeData.getShoes().then(function (response) {
                vm.shoeList = response.data;
                console.log(response.data);
            });
        }

        vm.addShoe = function(newShoe) {
            storeData.addShoe(newShoe).then(function(response) {
                console.log(newShoe);
                window.location.href='#/';
            });
        }
    }


})();