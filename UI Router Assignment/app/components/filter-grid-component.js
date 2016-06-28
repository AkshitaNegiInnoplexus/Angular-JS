angular.module('comp')
	.component('filterGrid',{
		templateUrl:'partials/filter.html',
		controller: ['$http','cartService','$scope','$state', function($http,cartService,$scope,$state){
			var self= this;
			self.phones = [];
			self.$onInit = function(){

				$http.get('phones/phones.json').then(function(response){
					self.phones=response.data;
					//console.log(self.phones);
					self.phoneList = self.phones;
					//console.log(self.phoneList);
				})

			};

			self.all="All";
			$scope.cartItems=0;
			$scope.addToCart=cartService.addItemToCart;
  			//subscribe items added callback
  			cartService.onItemsAdded(function(items){
    			$scope.cartItems=items;
  			});

			/*$http.get('phones/phones.json').then(function(response){
				self.phones=response.data;
				console.log(self.phones.length);
		})*/

			this.comp= function(phone,company,id){
				console.log(company);
				self.phoneList=[];
				if(company === 'All')
				{
					self.phoneList = self.phones;
					phone = self.phones[0];
				}
				$state.go('home',{
					company:company,
					id:id
				},{
					notify:false
				})
				cartService.addItemToCart(phone);
				for (var i = 0; i<self.phones.length; i++) {
					if(company === self.phones[i].company){
						self.phoneList.push(self.phones[i]);
					}
				}

			}
		}]
	});
