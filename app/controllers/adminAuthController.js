angular.module("truckingApp").controller("AdminAuthController", [
  "$scope",
  "$location",
  "$routeParams",
  "AdminAuthService",
  function ($scope, $location, $routeParams, AdminAuthService) {
    $scope.loginData = {};
    $scope.forgotPasswordData = {};
    $scope.resetPasswordData = {
      reset_token: $routeParams.reset_token,
      new_password: "",
    };

    $scope.login = function () {
      if (
        !$scope.loginData ||
        !$scope.loginData.email ||
        !$scope.loginData.password
      ) {
        $scope.loginMessage = "Email and Password are required";
        return;
      }
      AdminAuthService.login($scope.loginData)
        .then(function (response) {
          if (response) {
            console.log(response)
            // Save token to local storage
            localStorage.setItem('authToken', response.data.token);
            console.log("Token set");
            // Redirect to the dashboard route
            $location.path("/dashboard");
          } else {
            // Handle unexpected responses
            $scope.loginMessage = response.message || "Login failed";
          }
        })
        .catch(function (error) {
          console.error("Login error:", error);
          if (error.data && error.data.message) {
            $scope.loginMessage = error.data.message;
          } else {
            $scope.loginMessage = "An unexpected error occurred.";
          }
        });
    };
  }
]);
