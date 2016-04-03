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

    	return {
    		saveToken : saveToken,
    		getToken : getToken,
    		register : register,
    		login : login
    	};
    }
})();