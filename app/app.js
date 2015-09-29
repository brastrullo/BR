'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    caseInsensitiveMatch : true,
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
  .when('/about', {
    caseInsensitiveMatch : true, 
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .when('/projects', {
    caseInsensitiveMatch : true,
    templateUrl: 'views/projects/projects.html',
    controller: 'ProjectsCtrl',
    controllerAs: 'project'
  })
  .when('/contact', {
    caseInsensitiveMatch : true,
    templateUrl: 'views/contact/contact.html',
    controller: 'ContactCtrl',
    controllerAs: 'contact'
  })
  .when('/404', {
    templateUrl: 'views/home.html'
  })
  .otherwise({redirectTo: '/', caseInsensitiveMatch : true});

  $locationProvider.html5Mode(true);
}]);