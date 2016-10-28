(function () {
    'use strict';

    angular.module('booksServices', ['ngResource', 'config'])
        .factory('Books', ['$resource', 'config', function ($resource, config) {
            return $resource(config.ApiBooksUrl, {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }]);

})();