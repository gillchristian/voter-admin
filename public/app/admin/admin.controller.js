/* global io */
(function(){
'use strict';

  /**
   * Counter controller
   */
  angular.module('votesApp.admin')
    .controller('AdminController', CounterController);

    function CounterController(socket){
      // --- view model ---
      var vm = this;

      // --- exposed properties ---
      vm.contenders = ['', ''];

      // --- exposed methods ---
      vm.newContenders = newContenders;

      activate();
      /////////////////////////
      /**
       * Initializes the controller state
       */
      function activate(){
        socketEventHandlers();
      }

      /**
       * Set socket.io events handlers
       */
      function socketEventHandlers(){
        socket.on('update results', updateResults);
      }
      /**
       * Update the contenders on vote
       */
      function updateResults(results){
        vm.results = JSON.parse(results);
      }
      /**
       * Update count on socket count event
       */
      function newContenders(){
        var contenders = JSON.stringify(vm.contenders);
        socket.emit('new contenders', contenders);
        vm.contenders[0] = '';
        vm.contenders[1] = '';
      }
    }

})();
