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
		templateUrl: 'directives/searchresult.html',
		replace: true
	}
}])

;