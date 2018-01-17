var app = angular.module("hpApp", []);

app.controller("SortingHatController", function($scope, $http) {
	$scope.gPoints = 0;
	$scope.sPoints = 0;
	$scope.rPoints = 0;
	$scope.hPoints = 0;
	
	$http.get("questions.json").then(function(response) {
        $scope.questions = response.data.questions;
        $scope.options = response.data.questions.query.options;
    });
});
