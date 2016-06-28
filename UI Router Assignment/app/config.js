angular.module('myApp')
	.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home/All/motorola-xoom-with-wi-fi");

  $stateProvider
    .state('home', {
      url: "/home/:company/:id",
      views: {
	      'filters': {
	        template: "<filter-grid></filter-grid>"
	      },
	      'desc': {
	        template: "<detail-desc></detail-desc>"
	      }
	    }
    })
    /*
    .state('state', {
      url: "/home/:id",
      views: {
	      'filters': {
	        template: "<filter-grid></filter-grid>"
	      },
	      'desc': {
	        template: "<detail-desc></detail-desc>"
	      }
	    }
    })*/
    .state('add', {
      url: "/home/mobile/add",
      template: "<add-detail></add-detail>"
    })
    .state('update', {
      url: "/home/mobile/update/:id",
      template: "<update-detail></update-detail>"
    });
});
