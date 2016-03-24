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

/*var loc8rData = function () {
	return [{
		name: 'Burger Queen',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 3,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '0.296456',
		_id: '5370a35f2526f6785f8dfb6a'
	}];
}; */

var geolocation = function() {
	var getPosition = function (cbSuccess, cbError, cbnoGeo) {
	  if (navigator.geolocation) {
	  	navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
	  }
      else {
	    cbNoGeo();
      }
     };
     return {
	     getPosition :getPosition
       };
   };



var locationListCtrl = function ($scope, loc8rData, geolocation) {
	$scope.message = "Searching for nearby places";
	loc8rData
	  .success(function(data) {
	  	$scope.message = data.length > 0 ? "" : "No locations found";
	    $scope.data = { locations: data };
	})
	    .error(function (e) {
	 	   $scope.message = "Sorry, something's gone wrong";
	    });
    };

     var loc8rData = function ($http) {
    	return $http.get('/api/locations?lng=-0.79&lat=51.3&maxDistance=20');
    }


   

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData)
  .service('geolocation', geolocation);