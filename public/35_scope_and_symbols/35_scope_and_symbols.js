var app = angular.module('app',[])

.controller('mainCtrl', 
['$scope', 
function($scope){
	$scope.title = "mainCtrl2";
	$scope.person = {
		name : 'John Doe',
		address: 'Blk 113 Jurong East Street 31 #07-106 Singapore 600321'
	};

	$scope.enemy = {
		name : 'Directive Text Binding',
		address: 'Empire, Death Star, Floor 300th'
	};

	$scope.resultObject = {
		name : 'Result Object Sample',
		address: 'Block Result, Object Street, Sample City 11223344'
	};

	$scope.resultObject2 = {
		name : 'Result Object Sample 2 with function',
		address: 'Block Result',
		city: 'New York',
		state: 'NY NY NY',
		zip: '112233'
	}

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

.directive('searchResult', 
[
function(){
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			resultTitle: "@", //Oneway binding (Text)
			resultBody: "@"
		}
	}
}])

.directive('searchResultWithObject', 
[
function(){
	return {
		restrict: 'AECM',
		templateUrl: 'directives/object.html',
		replace: true,
		scope: {
			resultObject: "=" //Twoway binding (Objects)
		}
	}
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
		}
	}
}])


;