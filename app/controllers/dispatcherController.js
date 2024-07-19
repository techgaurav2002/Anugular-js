angular.module('truckingApp').controller('DispatcherController', [
  '$scope', 'RoutingService', '$location', 'DispatcherService', '$uibModal', '$log',
  function($scope, RoutingService, $location, DispatcherService, $uibModal, $log) {
    $scope.message = 'Welcome to the Dispatcher!';

    $scope.isActive = function(route) {
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

    $scope.getDispatchers = function() {
      DispatcherService.getDispatchers().then(function(response) {
        $scope.dispatchers = response.data.data;
        console.log(response.data.data);
      }, function(error) {
        console.error('Error fetching dispatchers:', error);
      });
    };

    // Call the function to fetch data on controller initialization
    $scope.getDispatchers();

    // Function to open the add dispatcher modal
    $scope.openAddDispatcherModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'addDispatcherModal.html',  // Modal template URL
        controller: 'AddDispatcherModalController',
        resolve: {
          dispatcher: function() {
            return {}; // Pass an empty object to the modal controller
          }
        }
      });

      modalInstance.result.then(function(dispatcher) {
        DispatcherService.postDispatcher(dispatcher).then(function(response) {
          if (response.data.status) {
            $scope.getDispatchers(); // Refresh dispatcher list
          } else {
            console.error('Error: ' + response.data.message);
          }
        }, function(error) {
          console.error('Error posting dispatcher:', error);
        });
      }, function() {
        $log.info('Add Dispatcher modal dismissed at: ' + new Date());
      });
    };

    // Function to open the edit dispatcher modal
    $scope.openEditDispatcherModal = function(dispatcher) {
      var modalInstance = $uibModal.open({
        templateUrl: 'editDispatcherModal.html',  // Edit modal template URL
        controller: 'EditDispatcherModalController',
        resolve: {
          dispatcher: function() {
            return angular.copy(dispatcher); // Pass a copy of the dispatcher object
          }
        }
      });

      modalInstance.result.then(function(updatedDispatcher) {
        console.log(updatedDispatcher,'this is updatedis[paue')
        DispatcherService.updateDispatcher(updatedDispatcher.dispatcher_id,updatedDispatcher).then(function(response) {
          if (response.data.status) {
            $scope.getDispatchers(); // Refresh dispatcher list
          } else {
            console.error('Error: ' + response.data.message);
          }
        }, function(error) {
          console.error('Error updating dispatcher:', error);
        });
      }, function() {
        $log.info('Edit Dispatcher modal dismissed at: ' + new Date());
      });
    };

    // Function to delete a dispatcher
    $scope.deleteDispatcher = function(dispatcherId) {
      if (confirm('Are you sure you want to delete this dispatcher?')) {
        DispatcherService.deleteDispatcher(dispatcherId).then(function(response) {
          if (response.data.status) {
            $scope.getDispatchers(); // Refresh dispatcher list
          } else {
            console.error('Error: ' + response.data.message);
          }
        }, function(error) {
          console.error('Error deleting dispatcher:', error);
        });
      }
    };
  }
]);

// Controller for the add dispatcher modal
angular.module('truckingApp').controller('AddDispatcherModalController', [
  '$scope', '$uibModalInstance', 'dispatcher',
  function($scope, $uibModalInstance, dispatcher) {
    $scope.dispatcher = dispatcher;

    $scope.saveDispatcher = function() {
      if ($scope.dispatcherForm.$valid) {
        $uibModalInstance.close($scope.dispatcher);
      } else {
        $scope.dispatcherForm.$setSubmitted(); // Trigger form validation
      }
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);

// Controller for the edit dispatcher modal
angular.module('truckingApp').controller('EditDispatcherModalController', [
  '$scope', '$uibModalInstance', 'dispatcher',
  function($scope, $uibModalInstance, dispatcher) {
    $scope.dispatcher = dispatcher;

    $scope.saveDispatcher = function() {
      if ($scope.dispatcherForm.$valid) {
        $uibModalInstance.close($scope.dispatcher);
      } else {
        $scope.dispatcherForm.$setSubmitted(); // Trigger form validation
      }
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);
