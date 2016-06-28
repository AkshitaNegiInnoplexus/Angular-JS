angular.module('myApp')    
        .factory("cartService",function(){
            var callbacks=[];
            var items=0;
    var addItemToCart=function(item){
    items = item;
    //alert(item.id);
  //notify if there are any listeners
   var i=0;
   for(i=0; i<callbacks.length;i++)
    callbacks[i](items);
  }
  
  //register listener
  var onItemsAdded=function(callback){
    callbacks.push(callback);
  }
  
  return{
    onItemsAdded:onItemsAdded,
    addItemToCart:addItemToCart
  }
  
});
   /*.service('shareData', function() {
        return {
            setData : setData,
            getData : getData
        }
         var shared_data;
        function setData(data) {
            this.shared_data = data; 
        }
        function getData() {
            return this.shared_data;
        }
    })*/

 /*
    .factory('shareData', function () {
        var shared_data="motorola-xoom-with-wi-fi";
        return {
            setData: function (o) {
                this.shared_data = o;
                return this.shared_data;
            },
            getData: function () {
                return this.shared_data;
            }
        };
});


    .service('shareData', function() {
      var shared_data = [];

      var setData = function(newObj) {
          shared_data.push(newObj);
      };

      var getData = function(){
          return shared_data;
      };

      return {
        setData: setData,
        getData: getData
      };

    });

*/

    