(function () {

	angular
	   .module('loc8rApp')
	   .controller('locationDetailCtrl', locationDetailCtrl);
    
    locationDetailCtrl.$inject = ['$routeParams', '$modal', 'loc8rData'];
	function locationDetailCtrl ($routeParams, $modal, loc8rData) {
		var vm = this;
		vm.locationid = $routeParams.locationid;

		loc8rData.locationById(vm.locationid)
		   .success(function(data) {
             vm.data = { location: data };
             vm.pageHeader = {
			    title: vm.data.location.name
		     };
	        })
            .error(function (e) {
            	console.log(e);
            });
        vm.popupReviewForm = function () {
        	alert("Let's add a review!");
        };
       }
})();