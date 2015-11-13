var app = angular.module("memoriesApp", ['ngRoute'])
  app.controller('HomeController', function($scope, $http){
      $scope.newMemory = function(){

        $scope.newObj = {old_days: $scope.memories.then,
                         these_days: $scope.memories.now,
                         year: $scope.memories.year}
                         $scope.memories = '';
          console.log($scope.newObj)
        
        $http.post('http://g12-paul-siskind-memories.cfapps.io/api/v1/memories',{memories:$scope.newObj}).then(function(data){
        console.log(data.data);
      })
      }

    
      $http.get('http://g12-paul-siskind-memories.cfapps.io/api/v1/memories').then(function(data){
        $scope.displays = data.data
        console.log(data.data)
      })
    
  })
  app.controller('YearController', function($scope, $http){

  })
  app.config(function($routeProvider){
    $routeProvider
     .when('/', {
      templateUrl: '../index.html',
      controller: 'HomeController'
     })
     .when('/years/:year',{
      templateUrl: '../index.html',
      controller: 'YearController'
     })

  })