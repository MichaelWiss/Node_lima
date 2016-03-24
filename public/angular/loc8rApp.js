angular.module('loc8rApp', []);

var _isNumeric = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
var formatDistance = function () {
	return function (distance) {
		var numDistance, unit;
		if (distance && _isNumeric(distance)) {
			if (distance > 1) {
				numDistance = parseFloat(distance).toFixed(1);
				unit = 'km';
			} else {
				numDistance = parseInt(distance * 1000,10);
				unit = 'm';
			}
			return numDistance + unit;
		} else {
			return "?";
		}
	};
};

var ratingStars = function () {
	return {
		scope: {
			thisRating : '=rating'
		},
		templateUrl: '/angular/rating-stars.html'
	};
};

var loc8rData = function () {
	return [{
		name: 'Burger Queen',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 3,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '0.296456',
		_id: '5370a35f2526f6785f8dfb6a'
	}];
};


var locationListCtrl = function ($scope, loc8rData) {
	$scope.data = { locations: loc8rData };
		/*locations: [{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '0.296456',
			_id: '5370a3536f6785f8dfb6a'
		},{
			name: 'Costy',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 5,
			facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Alcoholic drinks'],
			distance: '0.7865456',
			_id: '5370a35f2536f6785f8dfb6a'
       }
       ]}; */
    };

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData);