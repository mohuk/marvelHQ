(function(){

    'use strict';

    angular.module('marvel', ['ngRoute'])
      .config(configuration);

    function configuration($routeProvider){
      $routeProvider
        .when('/characters', {
          templateUrl: 'src/views/list.html',
          controller: 'List as vm'
        })
        .when('/characters/:id', {
          templateUrl: 'src/views/detail.html',
          controller: 'Detail as vm'
        })
        .otherwise({
          redirectTo: '/characters'
        });
    }

}());
