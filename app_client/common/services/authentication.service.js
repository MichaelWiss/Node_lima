(function () {
	angular
	  .module('loc8rApp')
	  .service('authentication', authentication);

    authentication.$inject = ['$window'];
    function authentication ($window) {

    	var saveToken = function (token) {
    		$window.localStorage['loc8r-token'] = token;
    	};

    	var getToken = function () {
    		return $window.localStorage['loc8r-token'];
    	};

    	var isLoggedIn = function() {
    		var token = getToken();

    		if (token){
    			var payload = JSON.parse($window.atob(token.split('.')[1]));

    		    return payload.exp > Date.now() / 1000;
    		  } else {
    		  	return false;
    		  }
    	};

    	register = function(user) {
    		return $http.post('/api/register', user).success(function(data){
    			saveToken(data.token);
    		});
    	};

    	login = function(user) {
    		return $http.post('/api/login', user).success(function(data) {
    			saveToken(data.token);
    		});
    	};

    	logout = function() {
            $window.localStorage.removeItem('loc8r-token');
        };

    	return {
    		saveToken : saveToken,
    		getToken : getToken,
    		register : register,
    		login : login,
    		logout : logout
    	};
    }
})();