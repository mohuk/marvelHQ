(function(){

  'use strict';

  angular.module('marvel')
    .controller('List', List);


  function List(marvelHQ){
    var vm = this;
    init();

    ///////////////


    function init(){
      marvelHQ.list()
        .then(function(res){
          vm.chars = res.data.data.results;
        });
    }
  }


}());
