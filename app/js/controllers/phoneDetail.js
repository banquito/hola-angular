(function () {
  
  app.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
    }
  ]);
  
})();