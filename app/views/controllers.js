'use strict';

angular.module('myApp.controllers', [])
.controller('HomeCtrl', [function() {
  var vm = this;
  vm.greet = "Hello, My name is Bradley Rastrullo and I am a Web Developer based in Toronto.";
}])
.controller('AboutCtrl', [function() {
}])
.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('views/projects/projects.json').success(function(data) {
    $scope.projects = data;
  });
}])
.controller('ContactCtrl', [function() {
  var vm = this;
  vm.message = "I'll be here, give me a shout out.";
}])
.controller('TitleCtrl', ['$scope', function($scope) {
  $scope.states = {}; //"active" must be in wrapper (states)
  $scope.states.active = 0;
  $scope.nav = [{
      id: 0,
      title: 'Home'
    }, {
      id: 1,
      title: 'About'
    }, {
      id: 2,
      title: 'Projects'
    }, {
      id: 3,
      title: 'Contact'
    }];
}]);