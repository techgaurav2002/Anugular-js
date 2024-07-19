angular.module('truckingApp')
.controller('DashboardController', ['$scope',"RoutingService","$location", function($scope,RoutingService,$location) {
    $scope.message = 'Welcome to the Dashboard!';
    // if($route.current && $route.current.originalPath === '/dashboard'){
    //   console.log("hello");
    //   $scope.activecls = "active";
    // }
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
