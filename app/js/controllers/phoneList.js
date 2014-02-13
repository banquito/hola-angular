(function () {
  
  app.controller('PhoneListCtrl', ['$scope', 'phoneService',
    function PhoneListCtrl($scope, phoneService) {
      phoneService.getAll(function(data) {
        $scope.phones = data;
      });

      $scope.orderProp = 'age';
    }
  ]);

})();