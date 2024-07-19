angular.module("truckingApp").factory("AdminAuthService", [
  "$http",
  function ($http) {
    var baseUrl = "http://localhost/truck/api";

    return {
      login: function (loginData) {
        return $http({
          method: "POST",
          url: baseUrl + "/login",
          data: loginData,
        });
      },
      // forgotPassword: function (admin_email) {
      //   return $http({
      //     method: "POST",
      //     url: baseUrl + "/forgot_password",
      //     data: { admin_email: admin_email },
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      // },
      // resetPassword: function (token, password) {
      //   return $http({
      //     method: "POST",
      //     url: baseUrl + "/reset_password",
      //     data: { reset_token: token, new_password: password },
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      // },
    };
  },
]);
