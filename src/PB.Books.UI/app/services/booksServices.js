(function () {
    'use strict';
    var booksServices = angular.module('booksServices', ['ngResource']);

    booksServices.factory('Books', ['$resource',
      function ($resource) {
          return $resource('http://localhost:15300/api/books/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);

})();