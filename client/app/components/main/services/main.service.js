(function() {
  'use strict';

  angular
    .module('store')
    .service('storeData', ['$http','$routeParams', storeData]);

  function storeData($http, $routeParams) {
      return{
          getShoes: function() {
              return $http.get('/shoe');
          }
      }
  }

})();