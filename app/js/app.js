var app = null;
(function () {
    'use strict';

  app = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
  ]);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/phones', {
          templateUrl: 'partials/phone-list.html',
          controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'partials/phone-detail.html',
          controller: 'PhoneDetailCtrl'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);
})();