// app.js
angular.module("truckingApp").factory("RoutingService", [
    "$location",
    function ($location) {
      return {
        redirectToDispatcher: function() {
          $location.path("/dispatcher");
          // console.log("dispatcher");
        },
        redirectToDriver: function() {
          $location.path("/driver");
          // console.log("driver");
        },
        redirectToTruck: function() {
          $location.path("/truck");
          // console.log("truck");
        },
        redirectToTrailer: function() {
          $location.path("/trailer");
          // console.log("trailer");
        },
        redirectToDashboard: function() {
          $location.path("/dashboard");
        }
      };
    }
  ]);
  