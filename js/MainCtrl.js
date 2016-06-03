angular.module('myApp').controller('MainCtrl', function($scope, dataService) {

	$scope.avengersArray = dataService.getData();

}); // End MainCtrl

