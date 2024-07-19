// angular.module("truckingApp", ["ngRoute"]).config([
//   "$routeProvider",
//   function ($routeProvider) {
//     $routeProvider
//       .when("/login", {
//         templateUrl: "views/login.html",
//         controller: "AdminAuthController",
//       })
//       .when("/forgot-password", {
//         templateUrl: "views/forgot-password.html",
//         controller: "AdminAuthController",
//       })
//       .when("/reset-password/:token", {
//         templateUrl: "views/reset-password.html",
//         controller: "AdminAuthController",
//         resolve: {
//           token: [
//             "$route",
//             function ($route) {
//               return $route.current.params.token;
//             },
//           ],
//         },
//       })
//       .when("/dashboard", {
//         templateUrl: "views/dashboard.html",
//         controller: "DashboardController",
//       })
//       .otherwise({
//         redirectTo: "/login",
//       });
//   },
// ]);

var truckingApp = angular.module('truckingApp', [
  'ngRoute',
  'ui.bootstrap'
]);

truckingApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  // Register the interceptor
  $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when("/login", {
      templateUrl: "views/login.html",
      controller: "AdminAuthController",
    })
    .when("/dashboard", {
      templateUrl: "views/dashboard.html",
      controller: "DashboardController",
    })
    .when("/dispatcher", {
      templateUrl: "views/dispatcher-list.html",
      controller: "DispatcherController",
    })
    .when("/driver", {
      templateUrl: "views/driver-list.html",
      controller: "DriverController",
    })
    .when("/truck", {
      templateUrl: "views/truck-list.html",
      controller: "TruckController",
    })
    .when("/trailer", {
      templateUrl: "views/trailer-list.html",
      controller: "TrailerController",
    })
    .when("/forgot-password", {
      templateUrl: "views/forgot-password.html",
      controller: "AdminAuthController",
    })
    .when("/reset-password/:token", {
      templateUrl: "views/reset-password.html",
      controller: "AdminAuthController",
      resolve: {
        token: [
          "$route",
          function ($route) {
            return $route.current.params.token;
          },
        ],
      },
    })
    .otherwise({
      redirectTo: "/login",
    });
}]);

