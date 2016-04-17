/**
*  Module
*
* Description
*/
angular.module('myApp', []).
controller('mCTRL', function($scope,$http){
	$scope.firstName = 'mENASH';
	$scope.lastName = ['Yamin'];
	$scope.arrA = ['yamin','menash','hello'];
	$scope.countries = [
						{"name":"a", "population":11},
						{"name":"b","population":12},
						{"name":"c","population":13}
						]
	$http.get('data/countries.json').then( //then  - promise
		function(responseSuccess){
			$scope.dataFromHttp = response;
		},function(responseErr){
			console.log('error:' + responseErr);
		}
	)
	 

	$scope.addTo = function(elem)
	{
		$scope.arrA.push(elem);
		$scope.elem = '';

	}

	$scope.remove = function(elem)
	{
		$scope.arrA.pop(elem);

	}


	$scope.$watch('firstName',function(newValue,oldValue)
	{
		console.log('this function will call every time I will change \'firstName\'  \nold val:'+oldValue+ ' \nnew val:'+newValue);
	});
});