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

    angular.module('app', ['ngResource', 'ngRoute', 'booksServices'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/home.html'
                })
                .when('/books', {
                    templateUrl: 'app/views/books.html',
                    controller: 'booksController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();