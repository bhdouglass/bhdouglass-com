var app = angular.module('app', []);

app.config(function($locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});

app.controller('indexCtrl', function ($scope, $http, $location, $timeout) {
	$scope.saving = false;
	$scope.version = 1.1;
	$scope.temperature_units = [
		{
			label: 'Fahrenheit',
			value: 'imperial'
		}, {
			label: 'Celsius',
			value: 'metric'
		}, {
			label: 'Kelvin',
			value: ''
		}
	];

	$scope.color_invert = [
		{
			label: 'White Background with Black Text',
			value: 0
		}, {
			label: 'Black Background with White Text',
			value: 1
		}
	];

	$scope.config_ints = ['refresh_time', 'wait_time'];

	$scope.config = {
		temperature_units: 'imperial',
		refresh_time: 30,
		wait_time: 1,
		location: '',
		color_invert: 0,
	};

	$scope.errors = {
		refresh_time: false,
		wait_time: false,
		location: false,
	};

	function validateInt(value, error) {
		if (parseInt(value) === value && parseInt(value) > 0) {
			error = false;
			value = parseInt(value);
		}
		else {
			value = 1;
			error = true;
		}

		return value;
	}

	angular.forEach($scope.config_ints, function(name) {
		$scope.$watch('config.' + name, function() {
			validateInt($scope.config[name], $scope.errors[name]);
		});
	});

	$scope.cancel = function() {
		if ($scope.saving) {
			return;
		}

		window.location.href = 'pebblejs://close#cancel';
	};

	$scope.save = function() {
		if ($scope.saving) {
			return;
		}

		$scope.saving = true;

		var error = false;
		angular.forEach($scope.errors, function(err) {
			if (err) {
				error = true;
			}
		});

		$scope.saving = false;
		if (!error) {
			console.log($scope.config);
			window.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify($scope.config));
		}
	};

	var hash = $location.hash();
	if (hash) {
		var config = JSON.parse(decodeURIComponent(hash));
		console.log(config);

		angular.forEach(config, function(value, key) {
			if ($scope.config[key] !== undefined) {
				if ($scope.config_ints.indexOf(key) >= 0) {
					$scope.config[key] = validateInt(value);
				}
				else {
					$scope.config[key] = value;
				}
			}
		});
		console.log($scope.config);
	}

	var query = $location.search();
	if (query.version) {
		$scope.version = parseFloat(query.version);
	}
	console.log('version: ' + $scope.version);
});