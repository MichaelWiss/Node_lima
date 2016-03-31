(function () {

	angular
	  .module('loc8rApp')
	  .controller('reviewModalCtrl', reviewModalCtrl);

	reviewModalCtrl.$inject = ['$modalInstance', 'loc8rData', 'locationData'];
	function reviewModalCtrl ($modalInstance, loc8rData, locationData) {
		var vm = this;
		vm.locationData = locationData;

		vm.onSubmit = function () {
			vm.formError = "";
			if(!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
			   vm.form.Error = "All fields required, please try again";
			   return false;
			} else {
			console.log(vm.formData);
			return false;
		} else {
			vm.doAddReview(vm.locationData.locationid, vm.formData);
		 }
		};
        
        var.modal = {
        	cancel : function () {
        		$modalInstance.dismiss('cancel');
        	}
          };
	    }
})();