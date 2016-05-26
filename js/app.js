angular.module('app',['ngAnimate'])
	.controller('textCtrl', function() {
		var vm = this;
		vm.genderPronoun = '';
		vm.genderPosessive = '';
		vm.gender = '';
		vm.name=''; 
		vm.jobTitle =''; 
		vm.tediousTask=''; 
		vm.dirtyTask =''; 
		vm.celebrity = ''; 
		vm.uselessSkill = ''; 
		vm.obnoxiousCelebrity = ''; 
		vm.hugeNumber = null; 
		vm.adjective = ''

		vm.genderChange = function(){
			if(vm.gender=="female"){
			vm.genderPronoun = "she";
			vm.genderPosessive = "her";
		};
		}

		vm.submit = function(){
			vm.submitted = true;
		};

		vm.reset = function(){
			vm.genderPronoun = "he";
			vm.genderPosessive = "his";
			vm.gender = "male";
			vm.name='name'; 
			vm.jobTitle ='job title'; 
			vm.tediousTask='tedious task'; 
			vm.dirtyTask ='dirty task'; 
			vm.celebrity = 'celebrity'; 
			vm.uselessSkill = 'useless skill'; 
			vm.obnoxiousCelebrity = 'obnoxious celebrity'; 
			vm.hugeNumber = 1000; 
			vm.adjective = 'adjective';
			// myForm.$submitted = false;
			vm.submitted = false;
		}

		vm.numbersOnly = /^\d+$/;
	});