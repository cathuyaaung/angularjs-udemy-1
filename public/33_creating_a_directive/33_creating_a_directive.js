var app = angular.module('app',[])

.controller('mainCtrl', 
['$scope', 
function($scope){
	$scope.title = "mainCtrl";
}])

.directive('searchResult', 
[
function(){
	return {
		restrict: 'AECM',
		template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">5565 Main St., New York, NY 1111</p></a>',
		replace: true
	}
}])

;