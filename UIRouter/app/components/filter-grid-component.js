angular.module('comp')
	.component('filterGrid',{
		templateUrl:'partials/filter.html',
		controller: ['$http','cartService','$scope','$state','$stateParams', function($http,cartService,$scope,$state,$stateParams){
			var self= this;
			self.phones = [];
			self.phoneList = [];
			self.$onInit = function(){

				$http.get('phones/phones.json').then(function(response){
					self.phones=response.data;
					//console.log(self.phones);
					//console.log($stateParams.company);
					if($stateParams.company != 'All')
					{

						for (var i = 0; i<self.phones.length; i++) {
							if($stateParams.company === self.phones[i].company){
								self.phoneList.push(self.phones[i]);
							}
						}
					}
					else
					{
							self.phoneList = self.phones;
					}
					//console.log(self.phoneList);
				})

			};

			self.all="All";
			$scope.cartItems=0;
			$scope.activeBtn1=0;
			$scope.addToCart=cartService.addItemToCart;
  			//subscribe items added callback
  			cartService.onItemsAdded(function(items){
    			$scope.cartItems=items;
					$scope.activeBtn1 = items["index"];
  			});

			this.comp= function(phone,company,id,index){
			//	console.log(company);
				self.phoneList=[];
				console.log("index"+index);
				$scope.activeBtn = index;
				$scope.activeBtn1 = 0;
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
				cartService.addItemToCart(company,phone);
				for (var i = 0; i<self.phones.length; i++) {
					if(company === self.phones[i].company){
						self.phoneList.push(self.phones[i]);
					}
				}

			}
		}]
	});
