const app = angular.module('myApp', []);


// initialize a controller

app.controller('MyController', ['$http', function($http){//constructor function called MyController
	this.crimes = [];
	
	this.getCrimes = function(){
		console.log(this, 'top this')
		const ctrl = this;
		$http({
			method: 'GET',
			url: 'https://data.cityofchicago.org/resource/dfnk-7re6.json'
		}).then(function(res){
			console.log(this)
				
			ctrl.crimes = res.data
		
			
			// success callback
			console.log(res)
		}, function(err){
			//failure callback
			console.log(err)
		})
		

	}
	// this.hello    = 'Hey Buddy';
	// this.isActive = true;
	// this.items    = ['apple', 'banana', 'pear']
	// this.divExist = false;
	// this.hideDiv  = true;
	// this.showDiv  = false;
	// this.imgSrc   = "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg";

	// this.someProperty = 'yellow';
	// this.handleSubmit = function(){
	// 	console.log('the form has been submitted')
	// },

	// this.handleClick = fucntion(){
	// 	console.log('div is clicked')
	// }
}])