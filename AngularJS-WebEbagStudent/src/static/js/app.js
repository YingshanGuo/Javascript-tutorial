var app = angular.module('myApp', [
    'ngRoute',
    'baseController',
    'homeController',
    'homeworkController',
    'classController',
    'learnController',
    'askController'
]);


app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/products', {
            templateUrl: 'partials/list.html',
            controller: 'MainController'
        }).
        when('/products/:productId', {
            templateUrl: 'partials/detail.html',
            controller: 'DetailCtrl'
        }).
        when('/home', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        }).
        when('/homework', {
            templateUrl: 'view/homework.html',
            controller: 'homeworkCtrl'
        }).
        when('/homework/detail', {
            templateUrl: 'view/homework-detail.html',
            controller: 'homeworklCtrl'
        }).
        when('/learn', {
            templateUrl: 'view/learn.html',
            controller: 'learnCtrl'
        }).
        when('/learn/detail', {
            templateUrl: 'view/learn-detail.html',
            controller: 'learnCtrl'
        }).
        when('/class', {
            templateUrl: 'view/class.html',
            controller: 'classCtrl'
        }).
        when('/ask', {
            templateUrl: 'view/ask.html',
            controller: 'askCtrl'
        }).
        when('/ask/detail', {
            templateUrl: 'view/ask-detail.html',
            controller: 'askCtrl'
        }).
        when('/ask/ask', {
            templateUrl: 'view/ask-ask.html',
            controller: 'askCtrl'
        }).
        when('/zone', {
            templateUrl: 'view/zone.html',
            controller: 'zoneCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
        $locationProvider.hashPrefix('');
    }
]);