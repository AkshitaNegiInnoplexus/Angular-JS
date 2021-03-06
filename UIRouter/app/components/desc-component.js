angular.module('comp')
	.component('detailDesc',{
		templateUrl:'partials/desc.html',
		controller:['$http','$stateParams','cartService','$scope','$state', function($http,$stateParams,cartService,$scope,$state){
			var self = this;
			self.$onInit = function(){
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				$http.get("phones/"+$stateParams.id+".json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			}
			//$scope.id = dataShare.shared;
			$scope.totalItems={id:"motorola-xoom-with-wi-fi"};
			  //subscribe items added callback
			cartService.onItemsAdded(function(items){
			    $scope.totalItems=items["json"];
					$scope.activeBtn1 = items["index"];
			    console.log("check" + items["index"]);
					$state.go('home',{
						company:items["comp"],
						id:$scope.totalItems.id
					},{
						notify:false
					})

			//console.log($scope.id);
				self.id=$stateParams.id
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				$http.get( ($scope.totalItems.id === undefined) ?"phones/motorola-xoom-with-wi-fi.json" : "phones/"+$scope.totalItems.id+".json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			});
		}]
	})
	//'+self.id+'
