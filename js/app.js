angular.module('app',[])
	.controller('textCtrl',['$scope', function($scope) {
		$scope.genderPronoun = "he";
		$scope.genderPosessive = "his";
		$scope.gender = "male";
		$scope.name='name'; 
		$scope.jobTitle ='job title'; 
		$scope.tediousTask='tedious task'; 
		$scope.dirtyTask ='dirty task'; 
		$scope.celebrity = 'celebrity'; 
		$scope.uselessSkill = 'useless skill'; 
		$scope.obnoxiousCelebrity = 'obnoxious celebrity'; 
		$scope.hugeNumber = 1000; 
		$scope.adjective = 'adjective'

		$scope.genderChange = function(){
			if($scope.gender=="female"){
			$scope.genderPronoun = "she";
			$scope.genderPosessive = "her";
		};
		}

		$scope.submit = function(){
			$scope.submitted = true;
		};

		$scope.reset = function(){
			$scope.genderPronoun = "he";
			$scope.genderPosessive = "his";
			$scope.gender = "male";
			$scope.name='name'; 
			$scope.jobTitle ='job title'; 
			$scope.tediousTask='tedious task'; 
			$scope.dirtyTask ='dirty task'; 
			$scope.celebrity = 'celebrity'; 
			$scope.uselessSkill = 'useless skill'; 
			$scope.obnoxiousCelebrity = 'obnoxious celebrity'; 
			$scope.hugeNumber = 1000; 
			$scope.adjective = 'adjective';
			// myForm.$submitted = false;
			$scope.submitted = false;
		}

		$scope.numbersOnly = /^\d+$/;
	}]);