angular.module('truckingApp').factory('DispatcherService', [
  '$http',
  function ($http) {
    var baseUrl = 'http://localhost/truck/api';

    return {
      // Method to post a new dispatcher
      postDispatcher: function (dispatcherData) {
        return $http({
          method: 'POST',
          url: baseUrl + '/dispatchers',
          data: dispatcherData
        }).catch(function (error) {
          console.error('Error posting dispatcher:', error);
          throw error;
        });
      },

      // Method to get all dispatchers
      getDispatchers: function () {
        return $http({
          method: 'GET',
          url: baseUrl + '/dispatchers'
        }).catch(function (error) {
          console.error('Error fetching dispatchers:', error);
          throw error;
        });
      },

      // Method to update an existing dispatcher
      updateDispatcher: function (dispatcherId, dispatcherData) {
        return $http({
          method: 'PUT',
          url: baseUrl + '/dispatchers/' + dispatcherId,
          data: dispatcherData
        }).catch(function (error) {
          console.error('Error updating dispatcher:', error);
          throw error;
        });
      },

      // Method to delete a dispatcher
      deleteDispatcher: function (dispatcherId) {
        return $http({
          method: 'DELETE',
          url: baseUrl + '/dispatchers/' + dispatcherId
        }).catch(function (error) {
          console.error('Error deleting dispatcher:', error);
          throw error;
        });
      }
    };
  }
]);
