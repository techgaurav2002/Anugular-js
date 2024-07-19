// authInterceptor.js
angular.module('truckingApp').factory('AuthInterceptor', [
    '$q', 
    function($q) {
      return {
        request: function(config) {
          // Retrieve the token from local storage
          var token = localStorage.getItem('authToken');
          console.log("Intercepter.js")
          if (token) {
            // Add the token to the headers
            config.headers.Authorization = 'Bearer ' + token;
          }
          return config;
        },
        responseError: function(response) {
          if (response.status === 401 || response.status === 403) {
            console.error('Unauthorized access - token may be invalid');
          }
          return $q.reject(response);
        }
      };
    }
  ]);
  