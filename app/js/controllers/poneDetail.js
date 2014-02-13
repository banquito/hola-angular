(function () {
  var controllers = angular.module('controllers', []);

  controllers.controller('PhoneListCtrl', ['$scope', '$http',
    function PhoneListCtrl($scope, $http) {
      $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
      });

      $scope.orderProp = 'age';
    }
  ]);

})();