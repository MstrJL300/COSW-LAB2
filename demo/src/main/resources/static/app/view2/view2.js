'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['Items','$scope',function(Items,$scope) {

    $scope.id=0;
    $scope.nombre="Nombre";
    $scope.registrar=function(){
        var newitem={"id":$scope.id,"nombre":$scope.nombre};
        //var arr=[];
        //arr.push(newitem);
        //var obj = JSON.parse(newitem);
        Items.save(newitem, function(){
            console.info("Saved "+newitem);            
        }
        );
    };

}]);