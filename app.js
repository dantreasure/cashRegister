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


function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'title', 'help': 'What was your item?'},
      {'id': 'cost', 'help': 'How much did it cost?'},
      {'id': 'notes', 'help': 'Do you have any special requests?'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus =
       makeHelpCallback(item.help);
  }
}

setupHelp();

// https://moqups.com/dan@devpointlabs.com/7LEERNAU

// be able to add to receipts and be able to  see past receipts

//filter by clicking the heading

//click again and it reverses the order