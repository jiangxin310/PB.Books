(function () {

    'use strict';

    angular.module('config', [])
        .provider('config', function () {
            var keys = {
                ApiBooksUrl: 'http://localhost:15300/api/books/'
            };
            return {
                set: function (values) {
                    keys = values;
                },
                $get: function () {
                    return keys;
                }
            };
        });

    angular.module('booksApp', ['booksServices']);

})();