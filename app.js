var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){

	$scope.filterBy = '';

	$scope.setFilter = function(whichFilter){
		if ($scope.filterBy === whichFilter) {
			$scope.filterBy = "-" + whichFilter;
		} else {
			$scope.filterBy = whichFilter;
		}
	};

	$scope.transactions = [
	{
		title: 'a',
		cost: 6,
		notes: 'x'
	},
	{
		title: 'b',
		cost: 1,
		notes: 'w'
	},
	{
		title: 'c',
		cost: 2,
		notes: 'v'
	},
	{
		title: 'd',
		cost: 3,
		notes: 'u'
	},
	{
		title: 'e',
		cost: 4,
		notes: 'z'
	},
	{
		title: 'f',
		cost: 5,
		notes: 'y'
	}
	];

	$scope.sum = function() {
		$scope.total = 0;
		for (var i = 0; i < $scope.transactions.length; i++) {
			$scope.total += $scope.transactions[i].cost;
		}
		return $scope.total;
	};
}]);




// https://moqups.com/dan@devpointlabs.com/7LEERNAU

// be able to add to receipts and be able to  see past receipts

//filter by clicking the heading

//click again and it reverses the order