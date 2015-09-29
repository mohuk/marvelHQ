(function(){

  'use strict';

  angular.module('marvel')
    .factory('marvelHQ', marvelHQ);


  function marvelHQ($http){

    var baseUrl = 'http://gateway.marvel.com/v1/public';
    var apiKey = '0312101b0db7fa0d5f34a07ca671b220';

    return {
      list: list,
      details: details
    };

    function list(){
      var queryParams = {
        params: {
          apikey: apiKey
        }
      };

      return $http.get(baseUrl + '/characters', queryParams);
    }

    function details(id){
      var queryParams = {
        params: {
          apikey: apiKey
        }
      };

      return $http.get(baseUrl + '/characters/' + id, queryParams);
    }
  }

}());
