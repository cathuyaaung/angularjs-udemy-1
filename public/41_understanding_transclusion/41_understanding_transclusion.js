var app = angular.module('app',[])

.controller('mainCtrl', 
['$scope', 
function($scope){

	$scope.formattedAddress = function(person){
		return person.address +', '+ person.city +', '+ person.state +', '+ person.zip;
	}


	$scope.peoples = [
		{
			name: 'John Doe',
			address: '111',
			city: 'Singapore',
			state: 'SG',
			zip: '111'
		},
		{
			name: 'John Doe 2',
			address: '222',
			city: 'Kuala Lampur',
			state: 'MY',
			zip: '222'
		},
		{
			name: 'John Doe 3',
			address: '333',
			city: 'Yangon',
			state: 'MM',
			zip: '333'
		},
	];


}])

.directive('searchResultWithObjectFunction', 
[
function(){
	return {
		restrict: 'AECM',
		templateUrl: 'directives/objectwithfunction.html',
		replace: true,
		scope: {
			resultObject: "=", //Twoway binding (Objects type)
			formattedAddressFunction: "&" //function type
		},
		link: function(scope, elements, attrs){
			console.log('linking...');
		},
		transclude: true
	}
}])


;