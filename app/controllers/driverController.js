angular.module('truckingApp')
.controller('DriverController', ['$scope',"RoutingService","$location", function($scope,RoutingService,$location) {
    $scope.message = 'Welcome to the Driver!';
    $scope.isActive = function (route) {
      return $location.path() === route ? 'active' : '';
    };
    $scope.redirectToDispatcher = function() {
        RoutingService.redirectToDispatcher();
      };

      $scope.redirectToDriver = function() {
        RoutingService.redirectToDriver();
      };
  
      $scope.redirectToTruck = function() {
        RoutingService.redirectToTruck();
      };
  
      $scope.redirectToTrailer = function() {
        RoutingService.redirectToTrailer();
      };
  
      $scope.redirectToDashboard = function() {
        RoutingService.redirectToDashboard();
      };
}]);
