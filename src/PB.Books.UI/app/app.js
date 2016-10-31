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

    angular.module('app', ['ngRoute', 'booksServices'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'homeController'
                })
                .when('/books', {
                    templateUrl: 'partials/books.html',
                    controller: 'booksController'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        });
})();