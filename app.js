var financialStuff = angular.module('financialStuff', ['ngRoute']);

financialStuff.config(function($routeProvider) {
    $routeProvider
        .when('/cashRegister', {
            templateUrl: 'cashRegister.html',
            controller: 'myCtrl'
        })
        .when('/calculator', {
            templateUrl: 'calculator.html',
            controller: 'CalcCtrl'
        })
                .when('/other', {
            templateUrl: 'other.html',
            controller: 'CalcCtrl'
        })
        .otherwise({
            redirectTo: '/cashRegister'
        });
});

financialStuff.controller('myCtrl', ['$scope', function($scope){

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

	 $scope.submit = function() {
          var newItem = {};
          newItem.title = $scope.title;
          newItem.cost = $scope.cost;
          newItem.notes = $scope.notes;
          newItem.createdOn = Date.now();

          $scope.transactions.push(newItem);

          //go through and set the $scope.title/content/tags to ''
        };
}]);


financialStuff.directive("currentTransaction", function() {
	return {
		restrict: 'E',
		templateUrl: 'current-transaction.html'
	};
});

	financialStuff.controller('CalcCtrl', ['$scope',
		function($scope) {

			$scope.evaluation = "0";

			$scope.pressKeyZero = function(key) {
				if($scope.evaluation == "0") {
					$scope.evaluation = "";
				}
				$scope.evaluation += key;
			};

			$scope.pressKeySym = function(key) {
				$scope.evaluation += key;
			};

			$scope.solve = function() {

				try {
					$scope.errorHandling = $scope.evaluation;
					$scope.evaluation = eval($scope.evaluation);
					if($scope.errorHandling === $scope.evaluation) {
						throw SyntaxError;
					}
				} catch (e) {
					if (e instanceof SyntaxError) {
						console.log(e);
						$scope.evaluation = "Syntax Error";
						setTimeout(function(){
							$scope.evaluation = "0";
						}, 500);
					} else {
						console.log("otherError")
						// sometimes 0 divided by x
						// percent of infinity
						// single number = itself
						// % of a negative number
						$scope.evaluation = "error";
						setTimeout(function(){
							$scope.evaluation = "0";
						}, 500);
					}
				}
			};

			$scope.clear = function() {
				$scope.evaluation = "0";
			}

			$scope.percent = function() {
				$scope.solve();
				if($scope.evaluation === "undefined") {

				} else {
					$scope.evaluation /= 100;
				}
			}
		}]);