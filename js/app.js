angular.module("memoriesApp", ['ngRoute']).

  controller('HomeController', function($scope, $http) {
     
    $scope.newMemory = function(){
      var newObj = {
                    "data": {
                      "type": "memory",
                      "attributes": {
                        "old_days": $scope.memories.then,
                        "these_days": $scope.memories.now,
                        "year": $scope.memories.year
                        }
                      }
                    }
      
      $http.post('http://g12-paul-siskind-memories.cfapps.io/api/v1/memories', newObj).then(function(response){
        var id = response.data.rows[0].id
        var newMemoryObj = {
          id: id,
          old_days: $scope.memories.then,
          these_days: $scope.memories.now,
          year: $scope.memories.year
        }
        $scope.memories[$scope.memories.length] = newMemoryObj;
      })
    }

  
    $http.get('http://g12-paul-siskind-memories.cfapps.io/api/v1/memories').then(function(response){
      $scope.memories = response.data
    })
    
  }).

  config(function($routeProvider){
    $routeProvider
     .when('/', {
        templateUrl: 'index.html',
        controller: 'HomeController'
     })
  })


  // http://g12-paul-siskind-memories.cfapps.io/api/v1/memories