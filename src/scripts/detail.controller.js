(function(){

  'use strict';

  angular.module('marvel')
    .controller('Detail', Detail);


  function Detail(marvelHQ, $routeParams){
    var vm = this;
    init();

    ///////////////

    function init(){
      marvelHQ.details($routeParams.id)
        .then(function(res){
          vm.char = res.data.data.results[0];
          vm.char.img = vm.char.thumbnail.path + '.' + vm.char.thumbnail.extension;
        });
    }
  }


}());
