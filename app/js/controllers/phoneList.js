(function () {
  var controllers = angular.module('controllers', []);

  controllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
    }
  ]);
  
})();